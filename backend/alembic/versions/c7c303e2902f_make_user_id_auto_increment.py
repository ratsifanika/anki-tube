"""make_user_id_auto_increment

Revision ID: c7c303e2902f
Revises: 66b62360ea94
Create Date: 2025-07-09 07:44:30.142608

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c7c303e2902f'
down_revision: Union[str, Sequence[str], None] = '66b62360ea94'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.execute("ALTER TABLE users MODIFY id INT AUTO_INCREMENT")


def downgrade() -> None:
    """Downgrade schema."""
    op.alter_column(
        'users',  # Nom de la table
        'id',  # Nom de la colonne
        type_=sa.Uuid(),  # Revenir au type UUID
        autoincrement=False,  # Retirer l'auto-incrément
        existing_type=sa.Integer(),  # Type existant avant la modification
    )
