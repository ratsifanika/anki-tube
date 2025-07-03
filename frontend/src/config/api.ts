// src/config/api.js
export const API_BASE_URL:string = process.env.NODE_ENV === 'production'
  ? 'http://backend'
  : 'http://localhost:8030';

export const API_ENDPOINTS:any = {
  collections: '/api/collection',
  users: '/api/users'
};