FROM python:3.13-slim-bookworm

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Installer le gestionnaire de paquets uv
RUN pip install uv

RUN uv pip install --system --no-cache-dir -r requirements.txt


# Crée dossier pour SQLite
# RUN mkdir -p /app/data
CMD ["sh", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"]