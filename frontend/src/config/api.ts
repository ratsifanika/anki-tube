// src/config/api.js
// export const API_BASE_URL:string = 'http://localhost:8030';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


export const API_ENDPOINTS:any = {
  collections: '/api/collection',
  users: '/api/users'
};