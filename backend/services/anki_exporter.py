from typing import List
from models.anki import AnkiCard
import tempfile
import uuid
import zipfile
import sqlite3
import os
import json
from datetime import datetime
from fastapi import HTTPException

class AnkiExporter:
    def create_anki_package(self, cards: List[AnkiCard], deck_name: str) -> str:
        """Crée un package Anki (.apkg) à partir des cartes"""

        # Créer un répertoire temporaire
        temp_dir = tempfile.mkdtemp()

        try:
            # Créer la base de données SQLite pour Anki
            db_path = os.path.join(temp_dir, "collection.anki2")
            self._create_anki_database(db_path, cards, deck_name)

            # Créer le fichier media (vide pour l'instant)
            media_path = os.path.join(temp_dir, "media")
            with open(media_path, 'w') as f:
                json.dump({}, f)

            # Créer le package ZIP (.apkg)
            package_path = os.path.join(tempfile.gettempdir(), f"ankitube_{uuid.uuid4().hex[:8]}.apkg")

            with zipfile.ZipFile(package_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                zipf.write(db_path, "collection.anki2")
                zipf.write(media_path, "media")

            return package_path

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Erreur lors de la création du package Anki: {str(e)}")

    def _create_anki_database(self, db_path: str, cards: List[AnkiCard], deck_name: str):
        """Crée la base de données Anki avec les cartes"""

        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        # Schéma de base de données Anki simplifié
        cursor.execute("""
            CREATE TABLE col (
                id integer primary key,
                crt integer not null,
                mod integer not null,
                scm integer not null,
                ver integer not null,
                dty integer not null,
                usn integer not null,
                ls integer not null,
                conf text not null,
                models text not null,
                decks text not null,
                dconf text not null,
                tags text not null
            )
        """)

        cursor.execute("""
            CREATE TABLE notes (
                id integer primary key,
                guid text not null,
                mid integer not null,
                mod integer not null,
                usn integer not null,
                tags text not null,
                flds text not null,
                sfld text not null,
                csum integer not null,
                flags integer not null,
                data text not null
            )
        """)

        cursor.execute("""
            CREATE TABLE cards (
                id integer primary key,
                nid integer not null,
                did integer not null,
                ord integer not null,
                mod integer not null,
                usn integer not null,
                type integer not null,
                queue integer not null,
                due integer not null,
                ivl integer not null,
                factor integer not null,
                reps integer not null,
                lapses integer not null,
                left integer not null,
                odue integer not null,
                odid integer not null,
                flags integer not null,
                data text not null
            )
        """)

        # Configuration par défaut
        timestamp = int(datetime.now().timestamp() * 1000)

        # Modèle de carte basique
        model = {
            "1": {
                "id": 1,
                "name": "Basic",
                "type": 0,
                "mod": timestamp,
                "usn": 0,
                "sortf": 0,
                "did": 1,
                "tmpls": [
                    {
                        "name": "Card 1",
                        "ord": 0,
                        "qfmt": "{{Front}}",
                        "afmt": "{{FrontSide}}<hr id=\"answer\">{{Back}}",
                        "did": None,
                        "bqfmt": "",
                        "bafmt": ""
                    }
                ],
                "flds": [
                    {"name": "Front", "ord": 0, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
                    {"name": "Back", "ord": 1, "sticky": False, "rtl": False, "font": "Arial", "size": 20}
                ],
                "css": ".card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }",
                "latexPre": "\\documentclass[12pt]{article}\\special{papersize=3in,5in}\\usepackage[utf8]{inputenc}\\usepackage{amssymb,amsmath}\\pagestyle{empty}\\setlength{\\parindent}{0in}\\begin{document}",
                "latexPost": "\\end{document}",
                "latexSvg": False,
                "req": [[0, "any", [0]]]
            }
        }

        # Deck configuration
        deck = {
            "1": {
                "id": 1,
                "name": deck_name,
                "extendRev": 50,
                "usn": 0,
                "collapsed": False,
                "newToday": [0, 0],
                "revToday": [0, 0],
                "lrnToday": [0, 0],
                "timeToday": [0, 0],
                "mod": timestamp,
                "desc": f"Cartes générées par AnkiTube le {datetime.now().strftime('%Y-%m-%d')}"
            }
        }

        # Configuration générale
        conf = {
            "nextPos": 1,
            "estTimes": True,
            "activeDecks": [1],
            "sortType": "noteFld",
            "timeLim": 0,
            "sortBackwards": False,
            "addToCur": True,
            "curDeck": 1,
            "newBury": True,
            "newSpread": 0,
            "dueCounts": True,
            "curModel": 1,
            "collapseTime": 1200
        }

        # Insérer la configuration dans la base
        cursor.execute("""
            INSERT INTO col (id, crt, mod, scm, ver, dty, usn, ls, conf, models, decks, dconf, tags)
            VALUES (1, ?, ?, ?, 11, 0, 0, ?, ?, ?, ?, '{}', '{}')
        """, (timestamp, timestamp, timestamp, timestamp,
              json.dumps(conf), json.dumps(model), json.dumps(deck)))

        # Insérer les cartes
        for i, card in enumerate(cards):
            note_id = i + 1
            card_id = i + 1

            # Créer la note
            fields = f"{card.front}\x1f{card.back}"
            tags_str = " ".join(card.tags) if card.tags else ""

            cursor.execute("""
                INSERT INTO notes (id, guid, mid, mod, usn, tags, flds, sfld, csum, flags, data)
                VALUES (?, ?, 1, ?, 0, ?, ?, ?, 0, 0, '')
            """, (note_id, f"ankitube{note_id}", timestamp, tags_str, fields, card.front))

            # Créer la carte
            cursor.execute("""
                INSERT INTO cards (id, nid, did, ord, mod, usn, type, queue, due, ivl, factor, reps, lapses, left, odue, odid, flags, data)
                VALUES (?, ?, 1, 0, ?, 0, 0, 0, ?, 0, 2500, 0, 0, 1001, 0, 0, 0, '')
            """, (card_id, note_id, timestamp, card_id))

        conn.commit()
        conn.close()