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