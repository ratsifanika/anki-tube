"""add columns seen, correct_answers, updated_at to users table

Revision ID: 4a45cd6bb8d4
Revises: 2f8fa45e19b3
Create Date: 2025-07-28 11:05:46.211358

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4a45cd6bb8d4'
down_revision: Union[str, Sequence[str], None] = '2f8fa45e19b3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('anki_cards', sa.Column('seen', sa.Integer(), nullable=False, server_default='0'))
    op.add_column('anki_cards', sa.Column('answered_correctly', sa.Integer(), nullable=False, server_default='0'))
    op.add_column('anki_cards', sa.Column('updated_at', sa.DateTime(), nullable=False, server_default=sa.text('CURRENT_TIMESTAMP')))


def downgrade() -> None:
    """Downgrade schema."""
    pass
