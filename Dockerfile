# Stage 1: Build frontend
FROM node:24-alpine AS frontend-build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
COPY ./frontend/index.html ./dist/
RUN npm install
COPY ./frontend ./
RUN npm run build || (echo "❌ NPM BUILD FAILED" && cat /root/.npm/_logs/*-debug.log && exit 1)

# Stage 2: Backend avec SQLite
FROM python:3.13-slim-bookworm

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Installer le gestionnaire de paquets uv
RUN pip install uv

WORKDIR /app
COPY ./backend ./
# Copie frontend build
COPY --from=frontend-build /app/frontend/dist ./static
RUN uv pip install --system --no-cache-dir -r requirements.txt


# Crée dossier pour SQLite
# RUN mkdir -p /app/data
CMD ["sh", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"]
