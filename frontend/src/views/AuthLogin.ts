import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { API_BASE_URL } from '../config/api';

@customElement('auth-login')
class AuthLogin extends LitElement {
    @state() email:string = '';
    @state() password:string = '';
    @state() message:string = '';
    @state() isSuccess:boolean = false;

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
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #218838;
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
        return html`
            <h2>Se connecter</h2>
            <form @submit=${this._handleSubmit as (e: Event) => void}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${(e: Event & { target: HTMLInputElement }) => (this.email = (e.target as HTMLInputElement).value)}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${(e: Event & { target: HTMLInputElement }) => (this.password = (e.target as HTMLInputElement).value)}
                required
            />

            <button type="submit">Connexion</button>
            </form>
            ${this.message
            ? html`<p class="message ${this.isSuccess ? 'success' : 'error'}">
                  ${this.message}
              </p>`
            : ''}
            <p style="text-align: center; margin-top: 20px;">
            Pas de compte? <a href="/register">S'enregistrer</a>
            </p>
        `;
    }

    async _handleSubmit(event: Event) {
        event.preventDefault();
        this.message = ''; // Clear previous messages
        this.isSuccess = false;

        // FastAPI-Users login expects 'username' for the email
        const formData = new URLSearchParams();
        formData.append('username', this.email);
        formData.append('password', this.password);

        try {
            const response = await fetch(`${API_BASE_URL}/auth/jwt/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            // For JWT, the token is often in the response body or Authorization header
            const data = await response.json();

            if (response.ok) {
                // Assuming token is in data.access_token for BearerTransport
                const token = data.access_token;
                localStorage.setItem('access_token', token); // Store token
                this.message = 'Connexion réussie!';
                this.isSuccess = true;
                this.email = ''; // Clear form
                this.password = ''; // Clear form

                // Optionally, dispatch an event or redirect to a dashboard
                const authEvent = new CustomEvent('auth-success', {
                    bubbles: true,
                    composed: true,
                    detail: { token: token, user: data.user }, // data.user might be present if configured
                });
                this.dispatchEvent(authEvent);

                // Example redirect after successful login
                // window.location.href = '/dashboard';
            } else {
                this.message = data.detail || 'Email ou mot de passe incorrect.';
                this.isSuccess = false;
            }
        } catch (error) {
            this.message = 'Erreur réseau. Veuillez réessayer.';
            this.isSuccess = false;
            console.error('Login error:', error);
        }
    }
}
