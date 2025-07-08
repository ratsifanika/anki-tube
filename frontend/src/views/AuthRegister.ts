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
                this.message = 'Enregistrement réussi! Veuillez vous connecter.';
                this.isSuccess = true;
                this.email = ''; // Clear form
                this.password = ''; // Clear form
                // Optionally, redirect to login page
                // window.location.href = '/login';
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
}