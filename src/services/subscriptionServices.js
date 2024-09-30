import { api } from "./api";


export const getEnrolled = async () => {
  try {
    const response = await api.get('/enrolled');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los inscriptos ' + error.message);
  }
};

export const createEnrolled = async (enrolled) => {
  try {
    const response = await api.post('/api/enrolled', enrolled);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la inscripcion ' + error.message);
  }
};

export const getEnrolledById = async (enrolledId) => {
  try {
    const response = await api.get( `/enrolled/${enrolledId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el inscripto ' + error.message);
  }
};

export const updateEnrolledById = async (enrolledId) => {
    try {
      const response = await api.put( `/enrolled/${enrolledId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al editar el inscripto ' + error.message);
    }
  };

  export const deleteEnrolled = async (enrolledId) => {
    try {
      const response = await api.delete( `/projects/${enrolledId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al borrar el inscripto ' + error.message);
    }
  };

