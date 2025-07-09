"""create user table

Revision ID: 66b62360ea94
Revises: 199997b32b16
Create Date: 2025-07-07 14:39:36.585303

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '66b62360ea94'
down_revision: Union[str, Sequence[str], None] = '199997b32b16'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        'users', # Nom de la table
        sa.Column('id', sa.Uuid(), nullable=False), # Ou sqlalchemy_utils.UUIDType() si sa.Uuid n'est pas dispo
        sa.Column('email', sa.String(length=320), unique=True, nullable=False),
        sa.Column('hashed_password', sa.String(length=1024), nullable=False),
        sa.Column('is_active', sa.Boolean(), default=True, nullable=False),
        sa.Column('is_superuser', sa.Boolean(), default=False, nullable=False),
        sa.Column('is_verified', sa.Boolean(), default=False, nullable=False),
        # Si tu as ajouté des champs comme first_name:
        # sa.Column('first_name', sa.String(length=255), nullable=True),
        # sa.Column('last_name', sa.String(length=255), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'users', ['email'], unique=True) # Index sur l'email


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(op.f('ix_user_email'), table_name='users')
    op.drop_table('users')
    pass
