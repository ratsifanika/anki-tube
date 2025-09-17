// src/config/api.js
const getApiBaseUrl = (): string => {
  // En développement, l'API est sur un port différent
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost' && window.location.port === '3000') {
    return 'http://localhost:8030';
  }
  
  // En production, l'API est servie par le même serveur
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS:any = {
  collections: '/api/collection',
  users: '/api/users'
};