from fastapi import FastAPI, Request
import httpx
from schemas.schemas import CardGenerationRequestFromYT
from services.youtube_service import YoutubeService
from services.transcription_service import TranscriptionService
from services.card_generation_service import CardGenerationService
from dotenv import load_dotenv
import os

youtube_service = YoutubeService()
transcription_service = TranscriptionService()
card_generation_service = CardGenerationService()

load_dotenv()
WORKER_URL = os.get('WORKER_URL')
app = FastAPI(name='Ankitube worker', version='1.0.0')

@app.post('/generate-cards-yt')
async def generateCardsFromYoutubeVideo(request=CardGenerationRequestFromYT):
    yt_id = youtube_service.get_youtube_id(request.video_url)
    audio_file, title = transcription_service.extract_audio_from_youtube(yt_id)
    transcript = transcription_service.transcribe_audio(audio_file)
    transcription_service.cleanup_audio_file(audio_file)
    cards = card_generation_service.generate_cards(transcript)
    async with httpx.AsyncClient() as client:
        res = client.post(f"{WORKER_URL}/", json=request)
        
