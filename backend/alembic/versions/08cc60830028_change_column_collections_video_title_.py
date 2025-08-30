"""change column collections.video_title to utf8mb4

Revision ID: 08cc60830028
Revises: 10b631451567
Create Date: 2025-08-30 06:27:22.503079

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '08cc60830028'
down_revision: Union[str, Sequence[str], None] = '10b631451567'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("ALTER TABLE collections MODIFY COLUMN video_title VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
