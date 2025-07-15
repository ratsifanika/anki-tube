from youtube_transcript_api import YouTubeTranscriptApi
import yt_dlp
import os
import whisper

class TranscriptionService:
    def __init__(self):
        self.model = whisper.load_model("tiny")#other options: "tiny","base", "small", "medium", "large"

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
            print(f"Transcripted Text: {transcript_text}")
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