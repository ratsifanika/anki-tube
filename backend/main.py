from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
import openai
from datetime import datetime
# import whisper
from dotenv import load_dotenv
from pathlib import Path
# import pydantic models
from models.anki import AnkiCard, CardGenerationResponse, AnkiExportRequest, CardGenerationRequest
# import transcription service
from services.transcription_service import TranscriptionService
# import card generation service
from services.card_generation_service import CardGenerationService
# import Anki exporter service
from services.anki_exporter import AnkiExporter

from auth import auth_backend, fastapi_users, current_active_user, current_superuser
from users import User, UserCreate, UserRead, UserUpdate
from database import Base, engine
# Charge les variables d'environnement depuis un fichier .env
# Assurez-vous que votre fichier .env est dans le même répertoire que main.py
load_dotenv()

app = FastAPI(title="AnkiTube API", version="1.0.0")

# Configuration CORS pour permettre les requêtes depuis l'extension Chrome
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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

# Routes API
@app.get("/")
async def root():
    return {"message": "AnkiTube API is running"}

@app.post("/api/generate-cards", response_model=CardGenerationResponse)
async def generate_cards(request: CardGenerationRequest):
    """Génère des cartes Anki à partir d'une vidéo YouTube"""

    import time
    start_time = time.time()

    try:
        # 1. Extraire l'audio de YouTube
        # audio_file, video_title = transcription_service.extract_audio_from_youtube(request.video_id)

        # # 2. Transcrire l'audio
        # transcript = transcription_service.transcribe_audio(audio_file)

        # # 3. Nettoyer le fichier audio
        # transcription_service.cleanup_audio_file(audio_file)

        transcript = transcription_service.get_transcript(request.video_id, languages=[request.language])
        # 4. Générer les cartes avec OpenAI
        cards = card_generation_service.generate_cards(
            transcript=transcript,
            difficulty=request.difficulty,
            card_count=request.card_count,
            language=request.language
        )

        # cards = [
        #     AnkiCard(front="Quelle est la capitale de la France ?", back="Paris", tags=["géographie", "France"]),
        #     AnkiCard(front="Qui a écrit Les Misérables ?", back="Victor Hugo", tags=["littérature", "auteur"]),
        #     AnkiCard(front="Quelle est la formule chimique de l'eau ?", back="H2O", tags=["chimie", "science"])
        # ]
        generation_time = time.time() - start_time

        return CardGenerationResponse(
            cards=cards,
            # video_title=video_title,
            video_title=request.video_title,
            generation_time=generation_time
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la génération: {str(e)}")

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

@app.get("/api/collection/{collection_id}")
async def get_collection(collection_id: str):
    """Récupère les données d'une collection Anki"""
    # Pour l'instant, on retourne des données statiques
    # Vous pouvez remplacer cette logique par une récupération depuis une base de données ou un fichier
    collection_data = {
        "id": collection_id,
        "name": "Ma Collection Anki",
        "cards": [
            {"id":"1","front": "Question 1", "back": "Réponse 1", "numberOfViews":3,"numberOfGoodAnswers": 3, "tags": ["tag1","tag4"], "createdAt": "2025-10-01T12:00:00Z", "updatedAt": "2025-10-02T12:00:00Z"},
            {"id":"2","front": "Question 2", "back": "Réponse 2", "numberOfViews":4,"numberOfGoodAnswers": 2, "tags": ["tag2"],"createdAt": "2025-10-01T12:00:00Z", "updatedAt": "2025-10-02T12:00:00Z"}
        ]
    }
    return collection_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)