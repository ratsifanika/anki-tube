from sqlmodel import SQLModel, Field
from typing import List, Optional
import json

class AnkiCard(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    front: str
    back: str
    tags_json: str = Field(default="[]", alias="tags")

    @property
    def tags(self) -> List[str]:
        return json.loads(self.tags_json)

    @tags.setter
    def tags(self, value: List[str]):
        self.tags_json = json.dumps(value)


class AnkiExportRequest(SQLModel):
    cards: List[AnkiCard]
    deck_name: str = "AnkiTube Cards"


class CardGenerationRequest(SQLModel):
    video_id: str
    video_title: str
    difficulty: str = "intermediaire"
    card_count: int = 15
    language: str = "fr"


class CardGenerationResponse(SQLModel):
    cards: List[AnkiCard]
    video_title: str
    generation_time: float
