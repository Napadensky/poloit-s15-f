import { useState, useEffect } from 'react';
import { getProjects } from '../services/projectServices';

export const useProject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [success, setSuccess] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await getProjects();
      setProjects(response); // Almacenar los proyectos obtenidos
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, success, fetchProjects }; 
};
