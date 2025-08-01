from typing import List, Optional
from pydantic import BaseModel
import datetime

class AnkiCardSchema(BaseModel):
    id: Optional[int]
    front: str
    back: str
    tags: List[str]
    collection_id: Optional[int]

    class Config:
        orm_mode = True

class CollectionRead(BaseModel):
    id: int
    uuid: str
    video_title: str
    created_at: datetime.datetime
    updated_at: datetime.datetime
    cards: List[AnkiCardSchema] = []

    class Config:
        orm_mode = True

class AnswerEvaluationResponse(BaseModel):
    card_id: int
    correct: bool
    comment: str

class AnswerEvaluationRequest(BaseModel):
    card_id: int
    answer: str


class AnkiExportRequest(BaseModel):
    cards: List[AnkiCardSchema]
    deck_name: str = "AnkiTube Cards"


class CardGenerationRequest(BaseModel):
    video_url: str
    difficulty: str = "intermediaire"
    card_count: int = 10
    language: str = "fr"


class CardGenerationResponse(BaseModel):
    collection_uuid: str