# Choisissez une version de Python spécifique et une image slim pour la production
# Ici, Python 3.11 avec Debian Bookworm (stable et légère)
FROM python:3.13-slim-bookworm

# Update system packages to patch vulnerabilities
# Installer git et ffmpeg + mise à jour du système, le tout en une seule commande
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# Installer le gestionnaire de paquets uv
RUN pip install uv

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier de dépendances en premier pour profiter du cache Docker
# Si requirements.txt ne change pas, cette couche ne sera pas reconstruite
COPY requirements.txt .

# Installez les dépendances avec uv (ou pip si vous préférez)
# Utilisez --system pour installer dans l'environnement virtuel du système de l'image
# Utilisez --no-cache-dir pour ne pas stocker les paquets téléchargés, réduisant la taille de l'image
RUN uv pip install --system --no-cache-dir -r requirements.txt

# Copiez le reste de votre application
COPY . .

# Exposez le port sur lequel votre application FastAPI écoute
EXPOSE 8000

# Commande pour démarrer votre application
# Assurez-vous que uvicorn est installé via requirements.txt
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]