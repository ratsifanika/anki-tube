import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('new-collection')
export class NewCollection extends LitElement {

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
        const response = await this._callBackend(url);
        if (response.status === 200) {
            // Assuming the backend returns a collection ID
            const collectionId = response.collectionId;
            alert(`Collection créée avec succès ! ID: ${collectionId}`);
            // Optionally, you can redirect or update the UI to show the new collection
        } else {
            alert("Échec de la création de la collection. Veuillez réessayer.");
        }

    } catch (error) {
      console.error("Erreur lors de la création de la collection:", error);
      alert("Une erreur s'est produite lors de la création de la collection.");
      return;
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
        }, 1000);
      });
    }

  render() {
    return html`
      <div class="container">
        <h1>Crée une nouvelle collection</h1>
         <div class="search-box">
            <input type="text" placeholder="Saisir une URL">
            <button @click=${this._handleClick}>🪄</button>
         </div>
      </div>
    `;
  }

}