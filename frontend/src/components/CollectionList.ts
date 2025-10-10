import { LitElement, css, html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { API_BASE_URL } from "../config/api";
import { isAuthenticated } from "../auth-state";

@customElement('collection-list')
export class CollectionList extends LitElement {
    @state() collections: Array<{ uuid: string, video_title: string }> = [];
    @state() loading: boolean = false;
    @state() page: number = 1;
    @property({ type: Boolean })
    isAuthenticated: boolean = false;
    observer: IntersectionObserver | null = null;

    static styles = css`
        /* Barre latérale gauche */
         ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 10px;
        }

        a {
            text-decoration: none;
            color: #333;
            padding: 2px 10px;
            display: block;
            border-radius: 5px;
            transition: background-color 0.2s;
            white-space: nowrap; /* Empêche le texte de se casser sur plusieurs lignes */
            overflow: hidden;
            text-overflow: ellipsis; /* Ajoute des points de suspension si le texte est trop long */
        }

        a:hover {
            background-color: #e6e6e6;
        }

        `;

    constructor() {
        super();
        this.isAuthenticated = isAuthenticated();
        // Écoute les changements globaux de l'état d'authentification
        window.addEventListener('auth-status-changed', this._handleAuthStatusChange.bind(this));
    }
    // Met à jour l'état interne du composant quand l'état d'auth global change
    private _handleAuthStatusChange() {
        this.isAuthenticated = isAuthenticated();
    }

    
    firstUpdated() {
        this.loadMore();

        const sentinel = this.shadowRoot?.querySelector('#sentinel') as HTMLDivElement;
        if (!sentinel) {
         console.warn('Sentinel element not found');
            return;
        }
        this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !this.loading) {
            this.loadMore();
        }
        });
        this.observer.observe(sentinel);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observer?.disconnect();
    }
    
    async loadMore() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            console.error('No access token found');
            return;
        }

        this.loading = true; // Éviter les appels multiples
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/collections?page=${this.page}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                this.collections = [...this.collections, ...data];
                this.page += 1;
            } else {
                console.error("Failed to load more collections", response.status);
            }
        } catch (error) {
            console.error("Network error:", error);
        } finally {
            this.loading = false;
        }
    }

    render() {
        return html`
         <ul class="container">
            ${this.isAuthenticated ? html`
                ${this.collections.map((item) => html`<li part="list-item"><a href="/collection/${item.uuid}">${item.video_title}</a></li>`)}
                ${this.loading ? html`<div class="loading">Chargement...</div>` : ''}
                ` : html``}
            <!-- Élément sentinelle pour détecter le bas -->
            <div id="sentinel"></div>
        `;
    }
}