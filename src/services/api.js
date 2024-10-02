import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const HEADERS = { 'Content-Type': 'application/json' };

const api = axios.create({ baseURL: API_URL, headers: HEADERS });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
