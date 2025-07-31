from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime
from fastapi import HTTPException

from models.anki import AnkiCard, Collection
from users import User
from sqlalchemy import select


async def save_cards_to_db(
        db: AsyncSession,
        cards: List[AnkiCard],
        video_id: str,
        video_title: str,
        current_user: Optional[User] = None
    ) -> int:

    collection = Collection(
        video_id=video_id,
        video_title=video_title,
        user_id=current_user.id,
        created_at=datetime.utcnow()
    )
    db.add(collection)
    await db.flush()

    for card in cards:
        card.collection_id = collection.id
        db.add(card)

    await db.commit()
    return collection.uuid
