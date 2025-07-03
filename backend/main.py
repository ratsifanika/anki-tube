from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional
from youtube_transcript_api import YouTubeTranscriptApi
import openai
import os
import json
import tempfile
import zipfile
import sqlite3
from datetime import datetime
import yt_dlp
# import whisper
import uuid
import sys
from dotenv import load_dotenv
from pathlib import Path

# Charge les variables d'environnement depuis un fichier .env
# Assurez-vous que votre fichier .env est dans le même répertoire que main.py
load_dotenv()

app = FastAPI(title="AnkiTube API", version="1.0.0")

# Configuration CORS pour permettre les requêtes depuis l'extension Chrome
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration OpenAI
openai.api_key = os.getenv("GEMINI_API_KEY")
if not openai.api_key:
    raise ValueError("OPENAI_API_KEY environment variable is required__")

# Modèles Pydantic
class CardGenerationRequest(BaseModel):
    video_id: str
    video_title: str
    difficulty: str = "intermediaire"
    card_count: int = 15
    language: str = "fr"

class AnkiCard(BaseModel):
    front: str
    back: str
    tags: List[str] = []

class AnkiExportRequest(BaseModel):
    cards: List[AnkiCard]
    deck_name: str = "AnkiTube Cards"

class CardGenerationResponse(BaseModel):
    cards: List[AnkiCard]
    video_title: str
    generation_time: float

# Service de transcription
class TranscriptionService:
    # def __init__(self):
    #     self.model = whisper.load_model("base")

    # Fetch transcript from a youtube video using the video id
    def get_transcript(self, video_id: str, languages: list = None) -> str:
        """
        Retrieves the transcript for a YouTube video.

        Args:
            video_id (str): The YouTube video ID.
            languages (list, optional): List of language codes to try, in order of preference.
                                    Defaults to ["en"] if None.

        Returns:
            str: The concatenated transcript text.

        Raises:
            Exception: If transcript retrieval fails, with details about the failure.
        """
        if languages is None:
            languages = ["en"]

        try:
            # Use the Youtube transcript API
            ytt_api = YouTubeTranscriptApi()
            fetched_transcript = ytt_api.fetch(video_id, languages=languages)

            # More efficient way to concatenate all text snippets
            transcript_text = " ".join(snippet.text for snippet in fetched_transcript)

            return transcript_text

        except Exception as e:
            # Handle specific YouTube transcript API exceptions
            from youtube_transcript_api._errors import (
                CouldNotRetrieveTranscript,
                VideoUnavailable,
                InvalidVideoId,
                NoTranscriptFound,
                TranscriptsDisabled
            )

            if isinstance(e, NoTranscriptFound):
                error_msg = f"No transcript found for video {video_id} in languages: {languages}"
            elif isinstance(e, VideoUnavailable):
                error_msg = f"Video {video_id} is unavailable"
            elif isinstance(e, InvalidVideoId):
                error_msg = f"Invalid video ID: {video_id}"
            elif isinstance(e, TranscriptsDisabled):
                error_msg = f"Transcripts are disabled for video {video_id}"
            elif isinstance(e, CouldNotRetrieveTranscript):
                error_msg = f"Could not retrieve transcript: {str(e)}"
            else:
                error_msg = f"An unexpected error occurred: {str(e)}"

            print(f"Error: {error_msg}")
            raise Exception(error_msg) from e


    def extract_audio_from_youtube(self, video_id: str) -> tuple[str, str]:
        """Extrait l'audio d'une vidéo YouTube et retourne le chemin du fichier audio et le titre"""
        ydl_opts = {
            'format': 'bestaudio/best',
            'extractaudio': True,
            'audioformat': 'mp3',
            'outtmpl': 'temp_audio_%(id)s.%(ext)s',
            'noplaylist': True,
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_id, download=False)
            title = info.get('title', 'Unknown')

            # Télécharger l'audio
            ydl.download([video_id])

            # Trouver le fichier audio téléchargé
            video_id = info.get('id')
            audio_file = f"temp_audio_{video_id}.mp3"

            if not os.path.exists(audio_file):
                # Essayer d'autres extensions
                for ext in ['webm', 'mp4', 'm4a']:
                    alt_file = f"temp_audio_{video_id}.{ext}"
                    if os.path.exists(alt_file):
                        audio_file = alt_file
                        break

            return audio_file, title

    def transcribe_audio(self, audio_file: str) -> str:
        """Transcrit un fichier audio en texte"""
        result = self.model.transcribe(audio_file)
        return result["text"]

    def cleanup_audio_file(self, audio_file: str):
        """Supprime le fichier audio temporaire"""
        try:
            if os.path.exists(audio_file):
                os.remove(audio_file)
        except Exception as e:
            print(f"Erreur lors de la suppression du fichier audio: {e}")

# Service de génération de cartes
class CardGenerationService:
    def __init__(self):
        self.client = openai.OpenAI()

    def generate_cards(self, transcript: str, difficulty: str, card_count: int, language: str) -> List[AnkiCard]:
        """Génère des cartes Anki à partir d'une transcription"""

        difficulty_prompts = {
            "facile": "concepts de base et définitions simples",
            "intermediaire": "compréhension approfondie et applications pratiques",
            "avance": "analyse critique, synthèse et connexions complexes"
        }

        language_names = {
            "fr": "français",
            "en": "anglais",
            "es": "espagnol"
        }

        system_prompt = f"""Tu es un expert en création de cartes d'apprentissage (flashcards) pour Anki.
        Crée {card_count} cartes de qualité à partir de la transcription fournie.

        Niveau de difficulté: {difficulty_prompts.get(difficulty, difficulty)}
        Langue: {language_names.get(language, language)}

        Règles importantes:
        - Chaque carte doit avoir une question claire au recto et une réponse complète au verso
        - Varie les types de questions: définitions, exemples, applications, comparaisons
        - Utilise un langage approprié au niveau de difficulté
        - Assure-toi que les réponses sont complètes mais concises
        - Ajoute des tags pertinents pour chaque carte

        Format de réponse JSON:
        {{
            "cards": [
                {{
                    "front": "Question claire et précise",
                    "back": "Réponse complète avec explications",
                    "tags": ["tag1", "tag2", "tag3"]
                }}
            ]
        }}
        """

        user_prompt = f"""Transcription de la vidéo:

        {transcript}

        Génère exactement {card_count} cartes d'apprentissage en {language_names.get(language, language)} basées sur cette transcription."""

        try:
            #décommenter la ligne suivante si vous utilisez l'API OpenAI
            self.client.base_url = "https://generativelanguage.googleapis.com/v1beta/openai/"
            response = self.client.chat.completions.create(
                model="gemini-2.0-flash",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.7,
                max_tokens=4000
            )

            content = response.choices[0].message.content

            # Parser la réponse JSON
            try:
                cards_data = json.loads(content)
                cards = [AnkiCard(**card) for card in cards_data["cards"]]
                return cards
            except json.JSONDecodeError:
                # Si le parsing JSON échoue, essayer d'extraire les cartes manuellement
                return self._parse_cards_fallback(content)

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de la génération des cartes: {str(e)}")

    def _parse_cards_fallback(self, content: str) -> List[AnkiCard]:
        """Méthode de fallback pour parser les cartes si le JSON échoue"""
        # Implementation basique de parsing de texte
        cards = []
        # Cette méthode devrait être implémentée selon le format de réponse de l'IA
        # Pour simplifier, on retourne une carte d'exemple
        cards.append(AnkiCard(
            front="Exemple de question",
            back="Exemple de réponse - Erreur de parsing détectée",
            tags=["erreur", "fallback"]
        ))
        return cards

# Service d'export Anki
class AnkiExporter:
    def create_anki_package(self, cards: List[AnkiCard], deck_name: str) -> str:
        """Crée un package Anki (.apkg) à partir des cartes"""

        # Créer un répertoire temporaire
        temp_dir = tempfile.mkdtemp()

        try:
            # Créer la base de données SQLite pour Anki
            db_path = os.path.join(temp_dir, "collection.anki2")
            self._create_anki_database(db_path, cards, deck_name)

            # Créer le fichier media (vide pour l'instant)
            media_path = os.path.join(temp_dir, "media")
            with open(media_path, 'w') as f:
                json.dump({}, f)

            # Créer le package ZIP (.apkg)
            package_path = os.path.join(tempfile.gettempdir(), f"ankitube_{uuid.uuid4().hex[:8]}.apkg")

            with zipfile.ZipFile(package_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                zipf.write(db_path, "collection.anki2")
                zipf.write(media_path, "media")

            return package_path

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de la création du package Anki: {str(e)}")

    def _create_anki_database(self, db_path: str, cards: List[AnkiCard], deck_name: str):
        """Crée la base de données Anki avec les cartes"""

        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        # Schéma de base de données Anki simplifié
        cursor.execute("""
            CREATE TABLE col (
                id integer primary key,
                crt integer not null,
                mod integer not null,
                scm integer not null,
                ver integer not null,
                dty integer not null,
                usn integer not null,
                ls integer not null,
                conf text not null,
                models text not null,
                decks text not null,
                dconf text not null,
                tags text not null
            )
        """)

        cursor.execute("""
            CREATE TABLE notes (
                id integer primary key,
                guid text not null,
                mid integer not null,
                mod integer not null,
                usn integer not null,
                tags text not null,
                flds text not null,
                sfld text not null,
                csum integer not null,
                flags integer not null,
                data text not null
            )
        """)

        cursor.execute("""
            CREATE TABLE cards (
                id integer primary key,
                nid integer not null,
                did integer not null,
                ord integer not null,
                mod integer not null,
                usn integer not null,
                type integer not null,
                queue integer not null,
                due integer not null,
                ivl integer not null,
                factor integer not null,
                reps integer not null,
                lapses integer not null,
                left integer not null,
                odue integer not null,
                odid integer not null,
                flags integer not null,
                data text not null
            )
        """)

        # Configuration par défaut
        timestamp = int(datetime.now().timestamp() * 1000)

        # Modèle de carte basique
        model = {
            "1": {
                "id": 1,
                "name": "Basic",
                "type": 0,
                "mod": timestamp,
                "usn": 0,
                "sortf": 0,
                "did": 1,
                "tmpls": [
                    {
                        "name": "Card 1",
                        "ord": 0,
                        "qfmt": "{{Front}}",
                        "afmt": "{{FrontSide}}<hr id=\"answer\">{{Back}}",
                        "did": None,
                        "bqfmt": "",
                        "bafmt": ""
                    }
                ],
                "flds": [
                    {"name": "Front", "ord": 0, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
                    {"name": "Back", "ord": 1, "sticky": False, "rtl": False, "font": "Arial", "size": 20}
                ],
                "css": ".card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }",
                "latexPre": "\\documentclass[12pt]{article}\\special{papersize=3in,5in}\\usepackage[utf8]{inputenc}\\usepackage{amssymb,amsmath}\\pagestyle{empty}\\setlength{\\parindent}{0in}\\begin{document}",
                "latexPost": "\\end{document}",
                "latexSvg": False,
                "req": [[0, "any", [0]]]
            }
        }

        # Deck configuration
        deck = {
            "1": {
                "id": 1,
                "name": deck_name,
                "extendRev": 50,
                "usn": 0,
                "collapsed": False,
                "newToday": [0, 0],
                "revToday": [0, 0],
                "lrnToday": [0, 0],
                "timeToday": [0, 0],
                "mod": timestamp,
                "desc": f"Cartes générées par AnkiTube le {datetime.now().strftime('%Y-%m-%d')}"
            }
        }

        # Configuration générale
        conf = {
            "nextPos": 1,
            "estTimes": True,
            "activeDecks": [1],
            "sortType": "noteFld",
            "timeLim": 0,
            "sortBackwards": False,
            "addToCur": True,
            "curDeck": 1,
            "newBury": True,
            "newSpread": 0,
            "dueCounts": True,
            "curModel": 1,
            "collapseTime": 1200
        }

        # Insérer la configuration dans la base
        cursor.execute("""
            INSERT INTO col (id, crt, mod, scm, ver, dty, usn, ls, conf, models, decks, dconf, tags)
            VALUES (1, ?, ?, ?, 11, 0, 0, ?, ?, ?, ?, '{}', '{}')
        """, (timestamp, timestamp, timestamp, timestamp,
              json.dumps(conf), json.dumps(model), json.dumps(deck)))

        # Insérer les cartes
        for i, card in enumerate(cards):
            note_id = i + 1
            card_id = i + 1

            # Créer la note
            fields = f"{card.front}\x1f{card.back}"
            tags_str = " ".join(card.tags) if card.tags else ""

            cursor.execute("""
                INSERT INTO notes (id, guid, mid, mod, usn, tags, flds, sfld, csum, flags, data)
                VALUES (?, ?, 1, ?, 0, ?, ?, ?, 0, 0, '')
            """, (note_id, f"ankitube{note_id}", timestamp, tags_str, fields, card.front))

            # Créer la carte
            cursor.execute("""
                INSERT INTO cards (id, nid, did, ord, mod, usn, type, queue, due, ivl, factor, reps, lapses, left, odue, odid, flags, data)
                VALUES (?, ?, 1, 0, ?, 0, 0, 0, ?, 0, 2500, 0, 0, 1001, 0, 0, 0, '')
            """, (card_id, note_id, timestamp, card_id))

        conn.commit()
        conn.close()

# Instances des services
transcription_service = TranscriptionService()
card_generation_service = CardGenerationService()
anki_exporter = AnkiExporter()

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

        # transcript = transcription_service.get_transcript(request.video_id, languages=[request.language])
        # # 4. Générer les cartes avec OpenAI
        # cards = card_generation_service.generate_cards(
        #     transcript=transcript,
        #     difficulty=request.difficulty,
        #     card_count=request.card_count,
        #     language=request.language
        # )

        cards = [
            AnkiCard(front="Quelle est la capitale de la France ?", back="Paris", tags=["géographie", "France"]),
            AnkiCard(front="Qui a écrit Les Misérables ?", back="Victor Hugo", tags=["littérature", "auteur"]),
            AnkiCard(front="Quelle est la formule chimique de l'eau ?", back="H2O", tags=["chimie", "science"])
        ]
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
            {"id":"1","front": "Question 1", "back": "Réponse 1", "numberOfViews":3,"numberOfGoodAnswer": 3, "tags": ["tag1","tag4"], "createdAt": "2025-10-01T12:00:00Z", "updatedAt": "2025-10-02T12:00:00Z"},
            {"id":"2","front": "Question 2", "back": "Réponse 2", "numberOfViews":4,"numberOfGoodAnswer": 2, "tags": ["tag2"],"createdAt": "2025-10-01T12:00:00Z", "updatedAt": "2025-10-02T12:00:00Z"}
        ]
    }
    return collection_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)