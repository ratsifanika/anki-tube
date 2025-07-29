import json
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlmodel import SQLModel
from typing import List, Optional
from schemas.anki import AnkiCardSchema
from pydantic import BaseModel
import datetime
from database import Base
import uuid
class Collection(Base):
    __tablename__ = "collections"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    uuid = Column(String(36), unique=True, default=lambda: str(uuid.uuid4()))
    video_id = Column(String(255), nullable=False)
    video_title = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.now(),nullable=False)
    updated_at = Column(DateTime, default=datetime.datetime.now(), onupdate=datetime.datetime.now(),nullable=False)

    # Clé étrangère vers User
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    # Relations
    user = relationship("User", back_populates="collections")
    anki_cards = relationship("AnkiCard", back_populates="collection", cascade="all, delete-orphan")

# Modèle AnkiCard (SQLAlchemy classique pour compatibilité)
class AnkiCard(Base):
    __tablename__ = "anki_cards"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    front = Column(String(255), nullable=False)
    back = Column(String(255), nullable=False)
    tags_json = Column(String(255), default="[]", nullable=False)
    seen = Column(Integer, default=0, nullable=True)
    answered_correctly = Column(Integer, default=0, nullable=False)
    updated_at = Column(DateTime, default=datetime.datetime.now(), onupdate=datetime.datetime.now(),nullable=False)

    # Clé étrangère vers Collection
    collection_id = Column(Integer, ForeignKey("collections.id", ondelete="CASCADE"), nullable=True)

    # Relation vers Collection
    collection = relationship("Collection", back_populates="anki_cards")

    @property
    def tags(self) -> List[str]:
        return json.loads(self.tags_json)

    @tags.setter
    def tags(self, value: List[str]):
        self.tags_json = json.dumps(value)

    def __str__(self):
        """
        Cette méthode définit la représentation textuelle de l'objet.
        Elle sera utilisée par print().
        """
        return f"AnkiCard(front='{self.front}', back='{self.back}')"


class AnkiExportRequest(BaseModel):
    cards: List[AnkiCardSchema]
    deck_name: str = "AnkiTube Cards"


class CardGenerationRequest(SQLModel):
    video_url: str
    difficulty: str = "intermediaire"
    card_count: int = 10
    language: str = "fr"


class CardGenerationResponse(BaseModel):
    collection_uuid: str
