import { useState } from 'react';


export const useMentor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
  return { mentor, loading, error, success };
};
