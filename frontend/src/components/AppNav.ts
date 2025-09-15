import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { isAuthenticated, logout, getUserInfo, UserInfo } from '../auth-state'; // Assurez-vous d'importer UserInfo

@customElement('app-nav')
export class AppNav extends LitElement {
    @property({ type: Boolean })
    isAuthenticated: boolean = false;

    @property({ type: Object })
    userInfo: UserInfo | null = null;

    constructor() {
        super();
        this._updateAuthState();
        // Écoute les changements globaux de l'état d'authentification
        window.addEventListener('auth-status-changed', this._handleAuthStatusChange.bind(this));
    }

    // Met à jour l'état interne du composant quand l'état d'auth global change
    private _handleAuthStatusChange() {
        this._updateAuthState();
    }

    // Récupère l'état d'authentification et les infos utilisateur
    private _updateAuthState() {
        this.isAuthenticated = isAuthenticated();
        this.userInfo = getUserInfo();
    }

    // Gère la déconnexion
    private _handleLogout() {
        logout(); // Appelle la fonction de déconnexion du service d'authentification
    }

    // Rend les liens de navigation cliquables sans recharger la page
    private _handleClick(e: Event) {
        if (e.target instanceof HTMLAnchorElement && e.target.href) {
            e.preventDefault();
            // Utilise vaadin-router pour naviguer
            window.history.pushState({}, '', e.target.href);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            background-color: #2c3e50; /* Couleur sombre pour la barre de navigation */
            color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap; /* Permet aux éléments de passer à la ligne sur petits écrans */
        }

        .logo {
            font-size: 1.8em;
            font-weight: bold;
            color: #4CAF50; /* Vert éclatant pour le logo */
            text-decoration: none;
            margin-right: 20px;
        }

        .nav-links {
            display: flex;
            gap: 25px; /* Espace entre les liens */
            align-items: center;
            flex-wrap: wrap;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 5px 0;
            transition: color 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #4CAF50; /* Changement de couleur au survol/actif */
        }

        .auth-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .welcome-message {
            font-size: 0.95em;
            color: #ecf0f1; /* Gris clair */
            margin-right: 10px;
        }

        button {
            background-color: #e74c3c; /* Rouge pour déconnexion */
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #c0392b;
        }

        /* Styles Responsifs */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
                padding: 10px 15px;
            }

            .logo {
                margin-bottom: 15px;
                width: 100%;
                text-align: center;
            }

            .nav-links, .auth-controls {
                width: 100%;
                justify-content: center; /* Centrer les liens */
                margin-bottom: 10px;
            }

            .nav-links a, .auth-controls button, .welcome-message {
                margin-bottom: 5px; /* Espacement vertical */
            }

            .auth-controls {
                margin-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                padding-top: 10px;
            }
        }

        @media (max-width: 480px) {
            .nav-links {
                flex-direction: column;
                gap: 10px;
            }
            .nav-links a {
                padding: 8px 0;
                width: 100%;
                text-align: center;
            }
        }
    `;

    render() {
        return html`
            <nav @click=${this._handleClick}>
                <a href="/" class="logo">Anki-Tube</a>

                <div class="nav-links">
                    <a href="/">Accueil</a>

                    ${this.isAuthenticated
                        ? html`
                              <a href="/">home</a>
                          `
                        : html`
                              <a href="/login">Se connecter</a>
                              <a href="/register">S'enregistrer</a>
                          `}
                </div>

                <div class="auth-controls">
                    ${this.isAuthenticated
                        ? html`
                              <span class="welcome-message"
                                  >Bienvenue, ${this.userInfo?.email || 'utilisateur'}!</span
                              >
                              <button @click=${this._handleLogout}>Déconnexion</button>
                          `
                        : ''}
                </div>
            </nav>
        `;
    }
}