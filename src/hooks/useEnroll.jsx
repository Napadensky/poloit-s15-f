import { useEffect, useState } from 'react';
import { createEnrolled, getEnrolled } from '../services/subscriptionServices';

export const useEnroll = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getEnrolled().then((res) => {
      setData(res);
    });
  }, []);

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

  return { enroll, loading, error, success, data };
};
