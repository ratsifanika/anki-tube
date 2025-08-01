"""add last_reviewed_at and next_review_at to table anki_cards

Revision ID: 10b631451567
Revises: 193a1f8c637d
Create Date: 2025-08-01 12:05:57.433788

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '10b631451567'
down_revision: Union[str, Sequence[str], None] = '193a1f8c637d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('anki_cards', sa.Column('next_review_at',
                                          sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=True))
    op.add_column('anki_cards', sa.Column('last_given_answer', sa.String(1000), nullable=True))
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
