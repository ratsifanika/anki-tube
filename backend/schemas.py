# schemas.py
import uuid
from fastapi_users import schemas

class UserRead(schemas.BaseUser[uuid.UUID]):
    # Exemple d'ajout de champs supplémentaires pour la lecture
    # first_name: str | None = None
    # last_name: str | None = None
    pass

class UserCreate(schemas.BaseUserCreate):
    # Exemple d'ajout de champs supplémentaires pour la création
    # first_name: str
    # last_name: str
    pass

class UserUpdate(schemas.BaseUserUpdate):
    # Exemple d'ajout de champs supplémentaires pour la mise à jour
    # first_name: str | None = None
    # last_name: str | None = None
    pass