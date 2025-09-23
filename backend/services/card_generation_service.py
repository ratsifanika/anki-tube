import openai
import json
from fastapi import HTTPException
from models.anki import AnkiCard
from typing import List
import os
import random
import datetime

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
        
        return int(base_count * difficulty_multiplier)

    def generate_cards(self, transcript: str, difficulty: str, language: str) -> List[AnkiCard]:
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

            # Parser la réponse JSON
            try:
                cards_data = json.loads(content)
                cards = [AnkiCard(**card) for card in cards_data["cards"]]
                return cards
            except json.JSONDecodeError:
                # Si le parsing JSON échoue, essayer d'extraire les cartes manuellement
                return self._parse_cards_fallback(content)

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de la génération des cartes: {str(e)}")

    def _parse_cards_fallback(self, content: str) -> List[AnkiCard]:
        """Méthode de fallback pour parser les cartes si le JSON échoue"""
        # Implementation basique de parsing de texte
        cards = []
        # Cette méthode devrait être implémentée selon le format de réponse de l'IA
        # Pour simplifier, on retourne une carte d'exemple
        cards.append(AnkiCard(
            front="Exemple de question",
            back="Exemple de réponse - Erreur de parsing détectée",
            tags=["erreur", "fallback"]
        ))
        return cards

    def generate_random_cards(self, card_count: int, collection_id: int = None) -> List[AnkiCard]:
        """
        Génère une liste de cartes AnkiCard pour les tests ou le peuplement initial.

        :param count: Nombre de cartes à générer
        :param collection_id: ID de collection à affecter à toutes les cartes (optionnel)
        :return: Liste d'instances de AnkiCard<
        """
        cards = []
        print(f"Generating {card_count} random cards...")
        for i in range(card_count):
            front = f"Question {i+1}"
            back = f"Réponse {i+1}"
            tags = [f"tag{i%3}", f"theme{i%2}"]
            seen = random.randint(0, 10)
            answered_correctly = random.randint(0, seen) if seen > 0 else 0
            updated_at = datetime.datetime.now()

            card = AnkiCard(
                front=front,
                back=back,
                tags_json=json.dumps(tags),
                seen=seen,
                answered_correctly=answered_correctly,
                updated_at=updated_at,
                collection_id=collection_id
            )
            cards.append(card)

        return cards