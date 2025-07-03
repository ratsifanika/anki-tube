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
        max-width: 800px;
        padding: 20px;
        box-sizing: border-box;
      }

      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .card-style {
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                padding: 16px;
                margin-bottom: 16px;
                width: 100%;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                align-items: stretch;
              }
              .card-style textarea {
                resize: vertical;
                min-height: 60px;
                font-size: 16px;
                padding: 8px;
                border-radius: 4px;
                border: 1px solid #ccc;
                margin-bottom: 12px;
              }
              .card-style button {
                align-self: flex-end;
                padding: 8px 16px;
                background: #1976d2;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 15px;
                transition: background 0.2s;
              }
              .card-style button:hover {
                background: #1565c0;
              }
    `
  ];

  @property({ type: String }) collectionId: string = '';
  @state() collectionData:Collection|null = null;
  @state() isLoading: boolean = true;
  @state() currentCard: Card | null = null;

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

        <p>
          ${this.isLoading ? 'Loading...' :
            this.currentCard ?
              `${this.currentCard.front}` :
              'No cards available in this collection.'}
        </p>

        <div class="card-style">
          <textarea placeholder="Type your answer here..."></textarea>
          <button @click="${() => { /* handle respond action here */ }}">Respond</button>
        </div>

        <button @click="${() => {
          if (this.collectionData) {
            this.currentCard = this.collectionData.randomCard();
          }
        }}">
          Next Card
        </button>
      </div>
    `;
  }
}