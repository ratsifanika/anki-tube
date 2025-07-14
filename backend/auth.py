from fastapi_users import FastAPIUsers
from fastapi_users.authentication import (
    AuthenticationBackend,
    BearerTransport,
    JWTStrategy,
)
from users import User, get_user_db
from fastapi import Depends, Request
from fastapi_users import BaseUserManager
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException
from sqlalchemy import select
from typing import Optional

# Configuration JWT
SECRET = "your-secret-key-here-change-this-in-production"

# Configuration du transport Bearer
bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")

# Fonction pour obtenir la stratégie JWT
def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

# Backend d'authentification
auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

# Gestionnaire d'utilisateurs
class UserManager(BaseUserManager[User, int]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def on_after_register(self, user: User, request=None):
        print(f"User {user.id} has registered.")

    async def on_after_forgot_password(self, user: User, token: str, request=None):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(self, user: User, token: str, request=None):
        print(f"Verification requested for user {user.id}. Verification token: {token}")

# Fonction pour obtenir le gestionnaire d'utilisateurs
async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)

# Instance FastAPIUsers
fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)
async def current_active_user_optional(request: Request) -> Optional[User]:
    try:
        return await fastapi_users.current_user(optional=True)(request)
    except Exception:
        return None  # Aucun utilisateur connect

# Raccourcis pour l'authentification
current_active_user = fastapi_users.current_user(active=True)
current_superuser = fastapi_users.current_user(active=True, superuser=True)