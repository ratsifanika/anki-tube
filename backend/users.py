# users.py
import uuid
from typing import Optional
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import AuthenticationBackend, BearerTransport, JWTStrategy
from fastapi_users.manager import BaseUserManager

from database import User, get_user_db
from schemas import UserCreate, UserRead, UserUpdate

SECRET = "YOUR_SECRET" # !!! CHANGE THIS IN PRODUCTION !!!

class UserManager(BaseUserManager[User, uuid.UUID]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def on_after_register(self, user: User, request: Optional[dict] = None):
        print(f"User {user.id} has registered.")

    async def on_after_forgot_password(self, user: User, token: str, request: Optional[dict] = None):
        print(f"User {user.id} has requested a password reset. Token: {token}")

    async def on_after_request_verify(self, user: User, token: str, request: Optional[dict] = None):
        print(f"Verification requested for user {user.id}. Token: {token}")

async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)

bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600) # Durée de vie du token JWT (1 heure)

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

fastapi_users = FastAPIUsers[User, uuid.UUID](
    get_user_manager,
    [auth_backend],
)

# Dépendance pour obtenir l'utilisateur courant authentifié
current_active_user = fastapi_users.current_user(active=True)
current_superuser = fastapi_users.current_user(active=True, superuser=True)