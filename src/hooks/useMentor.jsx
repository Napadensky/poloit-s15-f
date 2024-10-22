import { useEffect, useState } from 'react';

import { createMentor, getMentor } from '../services/mentorServices';

export const useMentor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getMentor().then((res) => {
      setData(res);
    });
  }, []);
  const mentor = async (mentorData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await createMentor(mentorData);
      setSuccess(true);
      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { mentor, loading, error, success, data };
};
