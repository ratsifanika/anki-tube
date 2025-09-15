# database.py
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from dotenv import load_dotenv

from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

import os

load_dotenv()

engine = create_async_engine( f"mysql+aiomysql://{os.getenv('MYSQL_USER', 'ankitube')}:{os.getenv('MYSQL_PASSWORD', 'ankitube')}"
    f"@{os.getenv('MYSQL_HOST', 'database')}:{os.getenv('MYSQL_PORT', '3306')}/{os.getenv('MYSQL_DATABASE', 'ankitube')}", echo=False )



# Création de la classe de session
async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

# Base pour les modèles
Base = declarative_base()

# Fonction pour obtenir la session de base de données
async def get_async_session() -> AsyncSession:
    async with async_session_maker() as session:
        yield session