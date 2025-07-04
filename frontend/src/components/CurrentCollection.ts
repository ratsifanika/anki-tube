import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { API_BASE_URL } from "../config/api";
import { Collection } from "../models/Collection";
import { Card } from "../models/Card";
@customElement('current-collection')
export class CurrentCollection extends LitElement {

  static styles = [
    css`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        padding: 10px;
        box-sizing: border-box;
      }

      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
        /* Statistiques de la collection */
        .collection-stats {
          display: flex;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        /* Carte principale */
        .card-container {
          width: 100%;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
          min-height: 200px;
          position: relative;
        }

        .card-stats {
          background: #f8f9fa;
          padding: 1rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .card-stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .card-stat-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        .views-icon {
          background: #3498db;
        }

        .correct-icon {
          background: #2ecc71;
        }

        .card-content {
          padding: 2rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          font-size: 1.2rem;
          line-height: 1.6;
          color: #2c3e50;
        }
        /* Zone de réponse */
        .answer-section {
          width: 95%;
          margin-left: auto;
          margin-right: auto;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .answer-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          margin-left: auto;
          margin-right: auto;
          color: #2c3e50;
          font-size: 1.2rem;
        }

        textarea {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          resize: vertical;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        textarea::placeholder {
          color: #adb5bd;
        }

        /* Boutons */
        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }

        button {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #2980b9, #1f5f8b);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #95a5a6, #7f8c8d);
          color: white;
        }

        .btn-secondary:hover {
          background: linear-gradient(135deg, #7f8c8d, #6c7b7d);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(149, 165, 166, 0.3);
        }

        .btn-next {
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          color: white;
        }

        .btn-next:hover {
          background: linear-gradient(135deg, #c0392b, #a93226);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.3);
        }
    `
  ];

  @property({ type: String }) collectionId: string = '';
  @state() collectionData:Collection|null = null;
  @state() isLoading: boolean = true;
  @state() currentCard: Card | null = null;
  totalCards:number = 10;
  openedCards:number = 5;
  correctAnswers:number = 3;

  protected willUpdate(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('collectionId') && this.collectionId) {
      this.fetchCollectionData();
    }
  }

  private async fetchCollectionData() {
    if (!this.collectionId) {
      console.warn('Collection ID is not set.');
      return;
    }
    this.isLoading = true;
    try {
      // const response = await fetch(`/api/collections/${this.collectionId}`);
      const response = await fetch(`${API_BASE_URL}/api/collection/${this.collectionId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data fetched:', data);
      this.collectionData = Collection.fromJSON(data);
      console.log('Collection data fetched:', this.collectionData);
      this.currentCard = this.collectionData.randomCard();
    } catch (error) {
      console.error('Error fetching collection data:', error);
    } finally
    {
      this.isLoading = false;
    }
  }
  render() {
    return html`
      <div class="container">
        <h1>${this.collectionData?.name}</h1>
        <!-- Statistiques de la collection -->
        <div class="collection-stats">
          <div class="stat-card">
            <span class="stat-number">${this.totalCards}</span>
            <span class="stat-label">Cartes Total</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${this.openedCards}</span>
            <span class="stat-label">Cartes Ouvertes</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${this.correctAnswers}</span>
            <span class="stat-label">Bonnes Réponses</span>
          </div>
        </div>
        <!-- Carte principale -->
        <div class="card-container">
          ${this.currentCard ? html`
            <div class="card-stats">
              <div class="card-stat-item">
                <span class="card-stat-icon views-icon"></span>
                <span>Vue ${this.currentCard.numberOfViews || 0} fois</span>
              </div>
              <div class="card-stat-item">
                <span class="card-stat-icon correct-icon"></span>
                <span>${this.currentCard.numberOfGoodAnswers || 0} bonnes réponses</span>
              </div>
            </div>
          ` : ''}

          <div class="card-content">
            ${this.isLoading
              ? html`<div class="loading">Chargement...</div>`
              : this.currentCard
                ? html`${this.currentCard.front}`
                : html`<div class="no-cards">Aucune carte disponible dans cette collection.</div>`
            }
          </div>
        </div>

        <!-- Zone de réponse -->
        <div class="answer-section">
          <h3>Votre réponse</h3>
          <textarea placeholder="Tapez votre réponse ici..."></textarea>
          <div class="button-group">
            <button class="btn-primary" @click="${() => { /* handle respond action here */ }}">
              Valider la Réponse
            </button>
            <button class="btn-secondary" @click="${() => { /* handle show answer action here */ }}">
              Voir la Réponse
            </button>
          </div>
        </div>

        <!-- Bouton carte suivante -->
        <div class="button-group">
          <button class="btn-next" @click="${() => {
            if (this.collectionData) {
              this.currentCard = this.collectionData.randomCard();
            }
          }}">
            Carte Suivante
          </button>
        </div>
      </div>
    `;
  }
}