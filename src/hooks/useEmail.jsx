import { useState } from 'react';
import { sendEmail } from '../services/emailServices';

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const triggerEmail = async (emailData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await sendEmail(emailData);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { triggerEmail, loading, error, success };
};
