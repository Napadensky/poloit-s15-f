import { api } from './api';

export const sendEmail = async (emailData) => {
  try {
    const response = await api.post('/api/sendEmail', emailData);
    return response.data;
  } catch (error) {
    throw new Error(
      'Error al enviar email: ' +
        (error.response?.data?.message || error.message),
    );
  }
};
