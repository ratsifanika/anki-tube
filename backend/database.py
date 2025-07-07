# database.py
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase

DATABASE_URL = "mysql+mysqlconnector://ankitube:ankitube@database/ankitube"  # Chemin vers votre fichier SQLite

class Base(DeclarativeBase):
    pass

class User(SQLAlchemyBaseUserTableUUID, Base):
    # Ajoutez ici des champs supplémentaires si nécessaire, par exemple:
    # first_name: Mapped[str | None] = mapped_column(String(255))
    # last_name: Mapped[str | None] = mapped_column(String(255))
    pass

engine = create_async_engine(DATABASE_URL)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)

async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session

async def get_user_db(session: AsyncSession):
    yield SQLAlchemyUserDatabase(session, User)