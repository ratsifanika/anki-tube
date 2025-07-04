import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { CurrentCollection } from "./CurrentCollection";

@customElement('new-collection')
export class NewCollection extends LitElement {

  @state()error: string|null = null;
  @state()loading: boolean = false;

  static styles = [
    css`
      .container {
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
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
            const currentCollection = document.createElement('current-collection') as CurrentCollection;
            currentCollection.collectionId = collectionId;
            // this.parentElement?.classList.remove('main-content');
            // this.parentElement?.classList.add('current-collection');
            this.parentElement?.appendChild(currentCollection);
            this.remove(); // Remove the new collection component after creation

        } else {
            this.error = "(${response.status})Erreur lors de la création de la collection. Veuillez réessayer.";
        }

    } catch (error) {
      this.error = "Erreur inattendue: ${error}";
    } finally{
        this.loading = false;
    }
  }

   _callBackend(url: string):Promise<{status: number, collectionId: string}>  {
    return new Promise((resolve) => {

      // Simulate a network request to create a new collection
      setTimeout(() => {
        const ok = Math.random() > 0.2; // Simulate a success rate of 80%
        if (!ok) {
            resolve({ status: 500, collectionId: "" });
            return;
        }
            resolve({ status: 200, collectionId: "mock-collection-id" });
        }, 500);
      });
    }

  render() {
    return html`
      <div class="container">
        <h1>Crée une nouvelle collection</h1>
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