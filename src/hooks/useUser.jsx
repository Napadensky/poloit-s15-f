// src/hooks/useCreateUser.js
import { useState } from 'react';

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const createUser = async (name, mail, phone, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5001/api/users', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mail, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }

      setUser(data.user);
      setToken(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, user, token };
};

export default useCreateUser;
