"""Add uuid column to collections table

Revision ID: 76e90e4c0a28
Revises: 4a45cd6bb8d4
Create Date: 2025-07-28 12:03:13.718959

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import uuid


# revision identifiers, used by Alembic.
revision: str = '76e90e4c0a28'
down_revision: Union[str, Sequence[str], None] = '4a45cd6bb8d4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Étape 1 : Ajouter la colonne
    op.add_column('collections', sa.Column('uuid', sa.String(length=36), nullable=True))

    # Étape 2 : Remplir les UUID existants
    connection = op.get_bind()
    result = connection.execute(sa.text("SELECT id FROM collections"))
    for row in result:
        connection.execute(
            sa.text("UPDATE collections SET uuid = :uuid WHERE id = :id"),
            {"uuid": str(uuid.uuid4()), "id": row.id}
        )

    # Étape 3 : Ajouter la contrainte unique et rendre NOT NULL
    op.create_unique_constraint("uq_collections_uuid", "collections", ["uuid"])
    op.alter_column("collections", "uuid", nullable=False)


def downgrade() -> None:
    """Downgrade schema."""
    pass
