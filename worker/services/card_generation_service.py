import openai
import json
from fastapi import HTTPException
from typing import List
import os

class CardGenerationService:
    def __init__(self):
        self.client = openai.OpenAI(api_key=os.getenv("LLM_API_KEY"))
    
    def compute_card_count(self, transcript: str, difficulty: str) -> int:
        """Calcule le nombre de cartes à générer en fonction de la longueur de la transcription et de la difficulté"""
        base_count = max(5, len(transcript) // 100)  # 1 carte pour chaque 100 caractères, minimum 5
        difficulty_multiplier = {
            "facile": 0.8,
            "intermediaire": 1.0,
            "avance": 1.2
        }.get(difficulty, 1.0)
        card_count = min(60, int(base_count * difficulty_multiplier))  # Limite à 60
        return card_count

    def generate_cards(self, transcript: str, difficulty: str, language: str):
        """Génère des cartes Anki à partir d'une transcription"""
        card_count = self.compute_card_count(transcript, difficulty)
        difficulty_prompts = {
            "facile": "concepts de base et définitions simples",
            "intermediaire": "compréhension approfondie et applications pratiques",
            "avance": "analyse critique, synthèse et connexions complexes"
        }

        language_names = {
            "fr": "français",
            "en": "anglais",
            "es": "espagnol"
        }

        system_prompt = f"""Tu es un expert en création de cartes d'apprentissage (flashcards) pour Anki.
        Crée {card_count} cartes de qualité à partir de la transcription fournie.

        Niveau de difficulté: {difficulty_prompts.get(difficulty, difficulty)}
        Langue: {language_names.get(language, language)}

        Règles importantes:
        - Chaque carte doit avoir une question claire au recto et une réponse complète au verso
        - Varie les types de questions: définitions, exemples, applications, comparaisons
        - Utilise un langage approprié au niveau de difficulté
        - Assure-toi que les réponses sont complètes mais concises
        - Ajoute des tags pertinents pour chaque carte

        Format de réponse JSON:
        {{
            "cards": [
                {{
                    "front": "Question claire et précise",
                    "back": "Réponse complète avec explications",
                    "tags": ["tag1", "tag2", "tag3"]
                }}
            ]
        }}
        """

        user_prompt = f"""Transcription de la vidéo:

        {transcript}

        Génère exactement {card_count} cartes d'apprentissage en {language_names.get(language, language)} basées sur cette transcription."""
        print("Prompt: ", system_prompt)
        try:
            #décommenter la ligne suivante si vous utilisez l'API GEMINI de Google
            #self.client.base_url = "https://generativelanguage.googleapis.com/v1beta/openai/"
            response = self.client.chat.completions.create(
                model="gpt-4.1-nano",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.7,
                max_tokens=4000
            )

            content = response.choices[0].message.content
            print("Response from LLM:", content)
            # Parser la réponse JSON
            return json.loads(content)
            
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de la génération des cartes: {str(e)}")
