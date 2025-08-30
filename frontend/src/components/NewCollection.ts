import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { CurrentCollection } from "./CurrentCollection";
import { API_BASE_URL } from "../config/api";

@customElement('new-collection')
export class NewCollection extends LitElement {

  @state()error: string|null = null;
  @state()loading: boolean = false;

  static styles = [
    css`
      .container {
        display:block;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
        margin: 0 auto; /* Center the container */
      }

      .search-box {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      input[type="text"] {
        flex-grow: 1;
        border: none;
        outline: none;
        font-size: 16px;
        padding: 5px 0;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
        color: #5f6368;
        margin-left: 10px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button:hover {
        color: #202124;
      }
      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
    `
  ];

   async _handleClick(){
    const input = this.shadowRoot?.querySelector('input[type="text"]') as HTMLInputElement;
    const url = input.value.trim();
    if (!url) {
        alert("Veuillez saisir une URL valide.");
        return;
    }
    try {
        this.loading = true;
        const response = await this._callBackend(url);
        if (response.status === 200) {
            // The backend returns a collection ID
            const collectionId = response.collectionId;
            console.log("Collection créée avec l'ID:", collectionId);
            // const currentCollection = document.createElement('current-collection') as CurrentCollection;
            // currentCollection.collectionId = collectionId;
            window.location.href = '/collection/' + collectionId; // Redirect to the new collection

        } else {
            this.error = "Erreur lors de la création de la collection. Veuillez réessayer.";
        }

    } catch (error) {
      this.error = "Erreur inattendue: ${error}";
    } finally{
        this.loading = false;
    }
  }

   async _callBackend(url: string):Promise<{status: number, collectionId: string}>  {
    try {
      const token = localStorage.getItem('access_token');
      const res = await fetch(`${API_BASE_URL}/api/generate-cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(
        {
          video_url: url,
          difficulty: 'intermediaire',
          card_count: 5,
          language: 'en'
         }
      )
      });
      if (!res.ok) {
      return { status: res.status, collectionId: "" };
      }
      const data = await res.json();
      return { status: res.status, collectionId: data.collection_uuid };
      } catch {
        return { status: 500, collectionId: "" };
      }

    }

  render() {
    return html`
      <div class="container">
        <h1>Créer une nouvelle collection</h1>
         <div class="search-box">
            <input type="text" placeholder="Saisir une URL" ?disabled=${this.loading}>
            <button @click=${this._handleClick} ?disabled=${this.loading}>🪄</button>
         </div>
          ${this.loading ? html`<p>Chargement...</p>` : ''}
          ${this.error ? html`<p style="color: red;">${this.error}</p>` : ''}
      </div>
    `;
  }

}