from users import User
from models.anki import Collection
from sqlalchemy.orm import relationship

def init_models():
    User.collections = relationship(
        "Collection",
        back_populates="user",
        cascade="all, delete-orphan"
    )
    Collection.user = relationship(
        "User",
        back_populates="collections"
    )
