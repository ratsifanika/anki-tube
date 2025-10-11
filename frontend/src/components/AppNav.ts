import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { isAuthenticated, logout, getUserInfo, UserInfo } from '../auth-state'; // Assurez-vous d'importer UserInfo

@customElement('app-nav')
export class AppNav extends LitElement {
    @property({ type: Boolean })
    isAuthenticated: boolean = false;
    @property({ type: Object })
    userInfo: UserInfo | null = null;
    @state() private _menuOpen = false;


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
            background-color: #2c3e50;
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
            position: relative;
        }

        .logo {
            font-size: 1.8em;
            font-weight: bold;
            color: #4CAF50;
            text-decoration: none;
            z-index: 10;
        }

        /* Menu hamburger */
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
            z-index: 10;
        }

        .menu-toggle span {
            display: block;
            width: 25px;
            height: 3px;
            background-color: white;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        .nav-content {
            display: flex;
            align-items: center;
            gap: 30px;
            flex: 1;
            justify-content: space-between;
            margin-left: 40px;
        }

        .nav-links {
            display: flex;
            gap: 25px;
            align-items: center;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 5px 10px;
            transition: all 0.3s ease;
            border-radius: 4px;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #4CAF50;
            background-color: rgba(76, 175, 80, 0.1);
        }

        .auth-controls {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .welcome-message {
            font-size: 0.95em;
            color: #ecf0f1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
        }

        button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background-color 0.3s ease;
            white-space: nowrap;
        }

        button:hover {
            background-color: #c0392b;
        }

        /* Tablettes */
        @media (max-width: 900px) {
            .welcome-message {
                max-width: 150px;
            }
            
            .nav-links {
                gap: 15px;
            }
            
            .nav-content {
                gap: 20px;
                margin-left: 20px;
            }
        }

        /* Mobiles */
        @media (max-width: 768px) {
            nav {
                padding: 12px 15px;
            }

            .menu-toggle {
                display: flex;
            }

            .nav-content {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 280px;
                background-color: #34495e;
                flex-direction: column;
                align-items: stretch;
                justify-content: flex-start;
                padding: 80px 20px 20px;
                margin: 0;
                gap: 0;
                box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
                transition: right 0.3s ease;
                z-index: 9;
                overflow-y: auto;
            }

            .nav-content.open {
                right: 0;
            }

            .nav-links {
                flex-direction: column;
                gap: 0;
                width: 100%;
                margin-bottom: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                padding-bottom: 20px;
            }

            .nav-links a {
                padding: 15px 10px;
                width: 100%;
                text-align: left;
                border-radius: 0;
            }

            .auth-controls {
                flex-direction: column;
                width: 100%;
                gap: 15px;
                align-items: stretch;
            }

            .welcome-message {
                text-align: center;
                max-width: 100%;
                padding: 10px;
                background-color: rgba(76, 175, 80, 0.1);
                border-radius: 5px;
            }

            button {
                width: 100%;
                padding: 12px;
            }

            /* Overlay pour fermer le menu */
            .overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 8;
            }

            .overlay.active {
                display: block;
            }
        }

        /* Petits mobiles */
        @media (max-width: 480px) {
            .logo {
                font-size: 1.5em;
            }

            .nav-content {
                width: 100%;
                right: -100%;
            }
        }

        /* Très petits écrans */
        @media (max-width: 360px) {
            nav {
                padding: 10px;
            }

            .logo {
                font-size: 1.3em;
            }
        }
    `;
    private _toggleMenu() {
        this._menuOpen = !this._menuOpen;
    }

    private _closeMenu() {
        this._menuOpen = false;
    }

    render() {
        return html`
            <nav>
                <a href="/" class="logo" @click=${this._closeMenu}>Anki-Tube</a>

                <button 
                    class="menu-toggle ${this._menuOpen ? 'active' : ''}"
                    @click=${this._toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="nav-content ${this._menuOpen ? 'open' : ''}" @click=${this._handleClick}>
                    <div class="nav-links">
                        ${this.isAuthenticated
                            ? html``
                            : html`
                                <a href="/login">Se connecter</a>
                                <a href="/register">S'enregistrer</a>
                            `}
                    </div>

                    ${this.isAuthenticated
                        ? html`
                            <div class="auth-controls">
                                <span class="welcome-message">
                                    Bienvenue, ${this.userInfo?.email || 'utilisateur'}!
                                </span>
                                <button @click=${this._handleLogout}>Déconnexion</button>
                            </div>
                        `
                        : ''}
                </div>

                <div class="overlay ${this._menuOpen ? 'active' : ''}" @click=${this._closeMenu}></div>
            </nav>
        `;
    }
}