import { useState } from 'react';
import { createEnrolled } from '../services/subscriptionServices';

export const useEnroll = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const enroll = async (enrollmentData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await createEnrolled(enrollmentData);
      setSuccess(true);
      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { enroll, loading, error, success };
};

