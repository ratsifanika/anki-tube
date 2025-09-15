from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
import openai
from datetime import datetime
# import whisper
from dotenv import load_dotenv
from pathlib import Path
# import pydantic models
from models.anki import Collection
# import transcription service
from services.transcription_service import TranscriptionService
# import card generation service
from services.card_generation_service import CardGenerationService
# import Anki exporter service
from services.anki_exporter import AnkiExporter

from auth import auth_backend, fastapi_users, current_active_user
from users import User, UserCreate, UserRead, UserUpdate
from database import Base, engine

from services.youtube_service import YoutubeService
from database import get_async_session
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional
from services.anki_db import save_cards_to_db
from sqlalchemy.future import select
from schemas.anki import CollectionRead, AnswerEvaluationResponse, CardGenerationRequest,CardGenerationResponse, AnswerEvaluationRequest, AnkiExportRequest
from sqlalchemy import select, func, literal_column
from models.anki import AnkiCard
# from models.init_relations import init_models
import logging
import traceback
from fastapi.staticfiles import StaticFiles

# Charge les variables d'environnement depuis un fichier .env
# Assurez-vous que votre fichier .env est dans le même répertoire que main.py
load_dotenv()

app = FastAPI(title="AnkiTube API", version="1.0.0")


# Configuration CORS dynamique
ENV = os.getenv("ENV", "dev")
if ENV != "prod":
    # En développement, autoriser le frontend sur localhost:3000
    allow_origins = ["http://localhost:3000"]
    # Configuration CORS pour permettre les requêtes depuis l'extension Chrome
    app.add_middleware(
        CORSMiddleware,
        allow_origins=allow_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Configuration OpenAI
openai.api_key = os.getenv("LLM_API_KEY")
if not openai.api_key:
    raise ValueError("LLM_API_KEY environment variable is required")

# Instances des services
transcription_service = TranscriptionService()
youtube_service = YoutubeService()
card_generation_service = CardGenerationService()
anki_exporter = AnkiExporter()



# Inclure les routeurs de FastAPI Users
app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)

# init_models()

# Routes API
@app.get("/api")
async def root():
    return {"message": "AnkiTube API is running"}

@app.post("/api/generate-cards", response_model=CardGenerationResponse)
async def generate_cards(request: CardGenerationRequest,
                         db: AsyncSession = Depends(get_async_session),
                         user: Optional[User] = Depends(current_active_user)
                         ):
    """Génère des cartes Anki à partir d'une vidéo YouTube"""
    import time
    start_time = time.time()

    try:
        video_id = youtube_service.get_youtube_id(request.video_url)
        # 1. Extraire l'audio de YouTube
        audio_file, video_title = transcription_service.extract_audio_from_youtube(video_id)
        # # 2. Transcrire l'audio
        transcript = transcription_service.transcribe_audio(audio_file)

        # # 3. Nettoyer le fichier audio
        # transcription_service.cleanup_audio_file(audio_file)


        # video_title = youtube_service.get_youtube_title(request.video_url)
        print(f"video_id:{video_id}, video_title:{video_title}")

        # transcript = transcription_service.get_transcript(video_id, languages=[request.language])
        # 4. Générer les cartes avec OpenAI
        # cards = card_generation_service.generate_cards(
        #     transcript=transcript,
        #     difficulty=request.difficulty,
        #     card_count=request.card_count,
        #     language=request.language
        # )
        cards = card_generation_service.generate_random_cards(request.card_count)
        for card in cards:
            print(f"Generated card: {card}")

        generation_time = time.time() - start_time

        collection_uuid = await save_cards_to_db(
            db=db,
            cards=cards,
            video_id=video_id,
            video_title=video_title,
            current_user=user
        )
        response = CardGenerationResponse(
            collection_uuid=str(collection_uuid)
            )
        return response

    except Exception as e:
        # Afficher la stack trace complète
        print(f"ERREUR DÉTAILLÉE: {str(e)}")
        print(f"TYPE D'ERREUR: {type(e).__name__}")
        print("STACK TRACE:")
        traceback.print_exc()
        
        # Log avec le module logging
        logging.error(f"Erreur dans generate_cards: {str(e)}", exc_info=True)
        
        raise HTTPException(status_code=500, detail=f"Erreur lors de la génération: {str(e)}")
    
@app.get("/api/collections", response_model=List[CollectionRead])
async def get_collections(page: int = 1, db: AsyncSession = Depends(get_async_session),
                          user: User = Depends(current_active_user)
                          ):
    """Récupère les collections Anki de l'utilisateur connecté"""
    stmt = select(Collection).where(Collection.user_id == user.id).order_by(Collection.created_at.desc()).offset((page - 1) * 10).limit(10)
    result = await db.execute(stmt)
    collections = result.scalars().all()
    return collections

@app.post("/api/export-anki")
async def export_anki(request: AnkiExportRequest):
    """Exporte les cartes au format Anki (.apkg)"""

    try:
        package_path = anki_exporter.create_anki_package(request.cards, request.deck_name)

        return FileResponse(
            path=package_path,
            media_type="application/octet-stream",
            filename=f"{request.deck_name.replace(' ', '_')}.apkg"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de l'export: {str(e)}")

@app.get("/api/health")
async def health_check():
    """Vérification de l'état de l'API"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "openai_configured": bool(openai.api_key)
    }

@app.get("/api/collection/{collection_id}", response_model=CollectionRead)
async def get_collection(collection_id: str, db: AsyncSession = Depends(get_async_session)):
    """Récupère les données d'une collection Anki"""
    stmt = select(Collection).where(Collection.uuid == collection_id)
    result = await db.execute(stmt)
    collection = result.scalar_one_or_none()
    if collection is None:
        raise HTTPException(status_code=404, detail="Collection not found")

    return collection

@app.get("/api/collection/{collection_id}/random")
async def get_random_card(collection_id: str, db: AsyncSession = Depends(get_async_session)):
    # Calcul du score pondéré dans la clause ORDER BY
    # On évite des poids négatifs avec GREATEST (ou func.max pour SQLAlchemy)
    stmt = (
        select(AnkiCard)
        .where(AnkiCard.collection_id == collection_id)
        .order_by(
            (func.greatest(1, AnkiCard.seen - AnkiCard.answered_correctly + 1) * func.random()).desc()
        )
        .limit(1)
    )

    result = await db.execute(stmt)
    card = result.scalar_one_or_none()

    if card is None:
        raise HTTPException(status_code=404, detail="No card found for this collection.")
    # Marquer la carte comme vue
    card.seen += 1
    await db.commit()

    return card

@app.post("/api/card/evaluate-answer", response_model=AnswerEvaluationResponse)
async def evaluate_answer(request: AnswerEvaluationRequest, db: AsyncSession = Depends(get_async_session)):
    """Enregistre la réponse à une carte Anki"""
    stmt = select(AnkiCard).where(AnkiCard.id == request.card_id)
    result = await db.execute(stmt)
    card = result.scalar_one_or_none()
    print(f"Evaluating answer for card ID: {card}")
    if card is None:
        raise HTTPException(status_code=404, detail="Card not found")

    # Incrémenter le compteur de réponses correctes
    answerd_correctly = True#TODO: Implement actual answer checking logic
    comment = "Your answer is correct!" if answerd_correctly else "Your answer is incorrect."#TODO: Implement actual comment logic
    card.answered_correctly += 1 if answerd_correctly else 0
    card.last_given_answer = request.answer
    await db.commit()

    return AnswerEvaluationResponse(
        card_id=card.id,
        correct=answerd_correctly,
        comment=comment
    )

# Monter les fichiers statiques depuis /app/static
app.mount("/assets", StaticFiles(directory="/app/static", html=True), name="static")
# Route catch-all pour servir l'index.html pour toutes les routes non-API
@app.get("/{full_path:path}")
async def serve_spa(request: Request, full_path: str):
    # Si c'est une route API, laisser FastAPI gérer normalement
    if full_path.startswith("api/") or full_path.startswith("auth/") or full_path.startswith("users/"):
        return {"error": "Route not found"}
    
    # Sinon, servir l'index.html pour le routage côté client
    return FileResponse("/app/static/index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)