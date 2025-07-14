from typing import List, Optional
from pydantic import BaseModel

class AnkiCardSchema(BaseModel):
    id: Optional[int]
    front: str
    back: str
    tags: List[str]
    collection_id: Optional[int]

    class Config:
        orm_mode = True