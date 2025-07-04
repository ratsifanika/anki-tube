import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import { CurrentCollection } from "./CurrentCollection";
import { NewCollection } from "./NewCollection";

@customElement('app-container')
export class AppContainer extends LitElement {

    static styles = [
        css`
            .app-container {
                display: flex; /* Flexbox pour la disposition latérale */
                width: 100%;
                min-height: 100vh; /* Prend toute la hauteur disponible */
                box-sizing: border-box;
            }
            .sidebar {
                width: 250px; /* Largeur par défaut de la barre latérale */
                background-color: #f8f9fa;
                border-right: 1px solid #e0e0e0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                transition: width 0.3s ease-in-out; /* Animation pour le pliage/dépliage */
                box-sizing: border-box;
                flex-shrink: 0; /* Empêche la barre latérale de rétrécir */
            }

            .sidebar.collapsed {
                width: 60px; /* Largeur réduite quand pliée */
                overflow: hidden; /* Cache le contenu débordant */
            }

            .sidebar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }

            .sidebar.collapsed .sidebar-header h3 {
                display: none; /* Cache le titre quand la barre est pliée */
            }

            .sidebar.collapsed .sidebar-header .toggle-sidebar {
                margin: auto; /* Centre le bouton quand il est seul */
            }

            .toggle-sidebar {
                background: none;
                border: none;
                font-size: 1.2em;
                cursor: pointer;
                padding: 5px;
                border-radius: 5px;
                transition: background-color 0.2s;
            }

            .toggle-sidebar:hover {
                background-color: #e0e0e0;
            }
            /* Contenu principal (où la barre de recherche est centrée) */
            .main-content {
                flex-grow: 1; /* Prend l'espace restant */
                display: block; /* Active Flexbox pour centrer le contenu */
                justify-content: center; /* Centre horizontalement le contenu */
                align-items: center; /* Centre verticalement le contenu */
                padding: 20px 40px;
                box-sizing: border-box;
                transition: margin-left 0.3s ease-in-out; /* Pour l'animation si la barre latérale pousse le contenu */
            }

            .main-content.expanded {
                margin-left: 0; /* Réinitialise la marge si la barre est dépliée et pousse le contenu */
            }

            .current-collection {
                flex-grow: 1;
                display: block; /* Active Flexbox pour centrer le contenu */
                padding: 20px 40px;
                box-sizing: border-box;
                transition: margin-left 0.3s ease-in-out; /* Pour l'animation si la barre latérale pousse le contenu */
            }
           .sidebar.collapsed .collection-list collection-list::part(list-item) {
                display: none;
            }

            .sidebar.collapsed .collection-list collection-list::part(list-item):first-child {
                display: block;
                text-align: center;

            }
            .content-wrapper {
                max-width: 800px;  /* ou 1000px, selon design */
                margin: 0 auto;    /* ✅ centre horizontalement */
            }
            `
    ];

    toggleSidebar() {
        const sidebar = this.shadowRoot?.querySelector('.sidebar');
        const mainContent = this.shadowRoot?.querySelector('#main-content');

        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
    }

    _onCollectionSelected(e: CustomEvent) {
        const collectionId = e.detail.collectionId;
        const mainContent = this.shadowRoot?.querySelector('#main-content') as HTMLElement;
        // mainContent.classList.remove('main-content');
        // mainContent.classList.add('current-collection');
        const currentCollection = document.createElement('current-collection') as CurrentCollection;
        currentCollection.collectionId = collectionId;
        mainContent.innerHTML = '';
        mainContent.appendChild(currentCollection);
    }

    _onNewCollection() {
        const mainContent = this.shadowRoot?.querySelector('#main-content') as HTMLElement;
        mainContent.classList.remove('current-collection');
        mainContent.classList.add('main-content');
        mainContent.innerHTML = '';
        const newCollection = document.createElement('new-collection') as NewCollection;
        mainContent.appendChild(newCollection);
    }

    render() {
        return html `
        <div class="app-container">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <h3><a href="#" @click="${this._onNewCollection}">Nouvelle collection</a></h3>
                    <button class="toggle-sidebar" @click="${this.toggleSidebar}">X</button>
                </div>
                <nav class="collection-list">
                    <collection-list @collection-selected=${this._onCollectionSelected}></collection-list>
                </nav>
            </aside>

            <main id="main-content" class="main-content">
                <div class="content-wrapper">
                    <new-collection></new-collection>
                </div>
            </main>
        </div>
        `;
}
}