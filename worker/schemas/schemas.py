from pydantic import BaseModel

class CardGenerationRequestFromYT(BaseModel):
    video_url: str
    difficulty: str
    language: str = "fr"