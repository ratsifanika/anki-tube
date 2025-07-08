from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from sqlalchemy import Column, String, Boolean, Integer
from sqlalchemy.ext.asyncio import AsyncSession
from database import Base, get_async_session
from fastapi_users import schemas
from fastapi import Depends

# Modèle User pour la base de données
class User(SQLAlchemyBaseUserTable[int], Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=True)
    last_name = Column(String(50), nullable=True)

# Schémas Pydantic pour les utilisateurs
class UserRead(schemas.BaseUser[int]):
    first_name: str | None = None
    last_name: str | None = None

class UserCreate(schemas.BaseUserCreate):
    first_name: str | None = None
    last_name: str | None = None

class UserUpdate(schemas.BaseUserUpdate):
    first_name: str | None = None
    last_name: str | None = None

# Fonction pour obtenir la base de données des utilisateurs
async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)