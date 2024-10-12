import { api } from "./api";


export const getMentor = async () => {
  try {
    const response = await api.get('/mentors');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los mentores ' + error.message);
  }
};

export const createMentor = async (mentor) => {
  try {
    const response = await api.post('/mentors', mentor);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la inscripcion ' + error.message);
  }
};

export const getMentorById = async (mentorId) => {
  try {
    const response = await api.get( `/enrolled/${mentorId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el mentor ' + error.message);
  }
};

export const updateMentorById = async (mentorId) => {
    try {
      const response = await api.put( `/mentor/${mentorId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al editar el inscripto ' + error.message);
    }
  };

  export const deleteMentor = async (mentorId) => {
    try {
      const response = await api.delete( `/projects/${mentorId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al borrar el mentor ' + error.message);
    }
  };

