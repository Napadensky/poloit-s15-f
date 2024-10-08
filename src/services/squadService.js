import { api } from './api';

export const getSquad = async () => {
  try {
    const response = await api.get('/squads');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los squads ' + error.message);
  }
};
export const getSquadById = async (squadId) => {
  try {
    const response = await api.get(`/squads/${squadId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el squad ' + error.message);
  }
};
export const updateSquadById = async (squadId) => {
  try {
    const response = await api.put(`/squad/${squadId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al editar el squad ' + error.message);
  }
};
