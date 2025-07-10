// frontend/auth-state.ts
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode @types/jwt-decode

// 1. Définir l'interface pour les informations utilisateur
// C'est cette interface qui manque et cause l'erreur
export interface UserInfo {
    id: string; // Ou 'number' si vos IDs sont numériques
    email: string;
    is_active: boolean;
    is_superuser: boolean;
    is_verified: boolean;
    // Ajoutez d'autres champs que votre backend pourrait renvoyer dans le token
    // ou lors de la réponse de login
    [key: string]: any; // Pour permettre des propriétés supplémentaires non définies explicitement
}

// 2. Fonction pour vérifier si l'utilisateur est authentifié
export function isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return false;
    }
    try {
        // jwtDecode retourne un type any par défaut, nous le castons pour accéder à 'exp'
        const decodedToken: { exp: number } = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Temps actuel en secondes

        if (decodedToken.exp < currentTime) {
            console.warn('Token expiré. Déconnexion automatique.');
            logout(); // Déconnecte l'utilisateur si le token est expiré
            return false;
        }
        return true;
    } catch (error) {
        console.error('Erreur lors du décodage du token JWT:', error);
        logout(); // Token invalide ou corrompu
        return false;
    }
}

// 3. Fonction pour récupérer les informations de l'utilisateur
export function getUserInfo(): UserInfo | null {
    if (isAuthenticated()) {
        const userInfoString = localStorage.getItem('user_info');
        if (userInfoString) {
            // Caster la chaîne JSON parsée en UserInfo
            return JSON.parse(userInfoString) as UserInfo;
        }
        // Si les infos ne sont pas dans localStorage, essayez de les extraire du token
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                // Caster le token décodé en UserInfo
                return jwtDecode(token) as UserInfo;
            } catch (e) {
                console.error("Erreur lors du décodage du token pour UserInfo:", e);
                return null;
            }
        }
    }
    return null;
}

// 4. Fonction pour la déconnexion
export function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    // Déclenche un événement global pour que d'autres composants puissent réagir à la déconnexion
    window.dispatchEvent(new CustomEvent('auth-status-changed', {
        detail: { isAuthenticated: false, token: null, user: null }
    }));
}