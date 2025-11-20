import yt_dlp
import os
# import whisper
from faster_whisper import WhisperModel

class TranscriptionService:
    def __init__(self):
        # self.model = whisper.load_model("tiny")#other options: "tiny","base", "small", "medium", "large"
        self.model = WhisperModel("tiny", device="cpu", compute_type="int8")


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
        # result = self.model.transcribe(audio_file)
        # return result["text"]

        segments, info = self.model.transcribe(audio_file)
        
        # Reconstituer le texte complet
        text = ""
        for segment in segments:
            text += segment.text + " "
            
        return text.strip()

    def cleanup_audio_file(self, audio_file: str):
        """Supprime le fichier audio temporaire"""
        try:
            if os.path.exists(audio_file):
                os.remove(audio_file)
        except Exception as e:
            print(f"Erreur lors de la suppression du fichier audio: {e}")