import { useState } from 'react';
import { login as loginService } from '../services/authServices';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (mail, password) => {
    if (!mail || !password) {
      setError('Correo y contraseña son requeridos');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await loginService(mail, password);
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user, token };
};