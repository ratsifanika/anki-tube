import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { API_BASE_URL } from '../config/api';

@customElement('auth-register')
class AuthRegister extends LitElement {
    @state()email: string = '';
    @state()password: string = '';
    @state()message: string = '';
    @state()isSuccess: boolean = false;

    static styles = css`
        :host {
            display: block;
            font-family: sans-serif;
            padding: 20px;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }
        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        input {
            width: calc(100% - 22px); /* Adjust for padding and border */
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            margin-top: 15px;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    `;

    render() {
        interface InputEventWithTarget extends Event {
            target: HTMLInputElement;
        }

        return html`
            <h2>S'enregistrer</h2>
            <form @submit=${(e: Event) => this._handleSubmit(e)}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${(e: InputEventWithTarget) => (this.email = e.target.value)}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${(e: InputEventWithTarget) => (this.password = e.target.value)}
                required
            />

            <button type="submit">S'inscrire</button>
            </form>
            ${this.message
            ? html`<p class="message ${this.isSuccess ? 'success' : 'error'}">
                  ${this.message}
              </p>`
            : ''}
            <p style="text-align: center; margin-top: 20px;">
            Déjà un compte? <a href="/login">Se connecter</a>
            </p>
        `;
    }

    async _handleSubmit(event: Event) {
        event.preventDefault();
        this.message = ''; // Clear previous messages
        this.isSuccess = false;

        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
               await this._loginUser(this.email, this.password);
            } else {
                this.message = data.detail || 'Erreur lors de l\'enregistrement.';
                this.isSuccess = false;
            }
        } catch (error) {
            this.message = 'Erreur réseau. Veuillez réessayer.';
            this.isSuccess = false;
            console.error('Registration error:', error);
        }
    }

    async _loginUser(email: string, password: string) {
        try {
            // Utilisation du endpoint de login de FastAPI-users
            // Selon la configuration, cela peut être /auth/login ou /auth/jwt/login
            const loginResponse = await fetch(`${API_BASE_URL}/auth/jwt/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: email, // FastAPI-users utilise 'username' même pour l'email
                    password: password,
                }),
            });

            const loginData = await loginResponse.json();

            if (loginResponse.ok) {
                // Stockage du token JWT
                localStorage.setItem('access_token', loginData.access_token);
                if (loginData.refresh_token) {
                    localStorage.setItem('refresh_token', loginData.refresh_token);
                }

                this.message = 'Enregistrement réussi! Connexion automatique...';
                this.isSuccess = true;

                // Effacer le formulaire
                this.email = '';
                this.password = '';

                // Émettre un événement pour notifier les autres composants
                this.dispatchEvent(new CustomEvent('user-logged-in', {
                    bubbles: true,
                    composed: true,
                    detail: { user: loginData }
                }));

                // Redirection vers la page d'accueil ou dashboard
                setTimeout(() => {
                    window.location.href = '/'; // ou votre page d'accueil
                }, 1500);

            } else {
                // Si la connexion automatique échoue, rediriger vers login
                this.message = 'Enregistrement réussi! Veuillez vous connecter.';
                this.isSuccess = true;
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }
        } catch (error) {
            console.error('Auto-login error:', error);
            // En cas d'erreur de connexion auto, rediriger vers login
            this.message = 'Enregistrement réussi! Veuillez vous connecter.';
            this.isSuccess = true;
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        }
    }
}