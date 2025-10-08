import openai
import os
import json
from fastapi import HTTPException

class AnswerEvaluationService:
    def __init__(self):
        self.client = openai.OpenAI(api_key=os.getenv("LLM_API_KEY"))

    def evaluate(self, answer: str, question: str) -> dict:
        user_prompt = f"""Evaluate the following answer to the question.\nQuestion: {question}\nAnswer: {answer}\nProvide a score from 0 to 1 and feedback in the
        language of the question.
        Format de réponse JSON:
        {{
            "evaluation": 
                {{
                    "score": "valeur entre 0 et 1",
                    "feedback": "Feedback constructif sur la réponse"
                }}
            
        }}
        """
        try:
            #décommenter la ligne suivante si vous utilisez l'API GEMINI de Google
            #self.client.base_url = "https://generativelanguage.googleapis.com/v1beta/openai/"
            response = self.client.chat.completions.create(
                model="gpt-4.1-nano",
                messages=[
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.7,
                max_tokens=2000
            )

            content = response.choices[0].message.content
            print("Response from LLM:", content)

            # Parser la réponse JSON
            try:
                data = json.loads(content)
                return data["evaluation"]
                
            except json.JSONDecodeError:
                raise HTTPException(status_code=500, detail="Erreur de parsing JSON dans la réponse de l'IA")

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de l'évaluation de la réponse: {str(e)}")