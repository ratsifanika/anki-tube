"""add updated_at column to Collection

Revision ID: 193a1f8c637d
Revises: 76e90e4c0a28
Create Date: 2025-07-28 13:48:04.578950

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '193a1f8c637d'
down_revision: Union[str, Sequence[str], None] = '76e90e4c0a28'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('collections',
        sa.Column('updated_at', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False, onupdate=sa.text('CURRENT_TIMESTAMP')))


def downgrade() -> None:
    """Downgrade schema."""
    pass
