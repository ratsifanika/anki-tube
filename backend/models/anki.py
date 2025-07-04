from pydantic import BaseModel
from typing import List

class AnkiCard(BaseModel):
    front: str
    back: str
    tags: List[str] = []

class AnkiExportRequest(BaseModel):
    cards: List[AnkiCard]
    deck_name: str = "AnkiTube Cards"

class CardGenerationRequest(BaseModel):
    video_id: str
    video_title: str
    difficulty: str = "intermediaire"
    card_count: int = 15
    language: str = "fr"

class CardGenerationResponse(BaseModel):
    cards: List[AnkiCard]
    video_title: str
    generation_time: float