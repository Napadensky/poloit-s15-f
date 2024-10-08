import { api } from './api';

export const login = async (mail, password) => {
  if (!mail || !password) {
    throw new Error('Correo y contraseña son requeridos');
  }

  try {
    const response = await api.post('/login', { mail, password });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Error en la autenticación';
    throw new Error(errorMessage);
  }
};
