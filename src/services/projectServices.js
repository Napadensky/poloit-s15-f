import { api } from "./api";


export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los proyectos ' + error.message);
  }
};

export const createProject = async (projectData) => {
  try {
    console.log('Enviando datos del proyecto:', projectData);
    const response = await api.post('/projects', projectData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    console.log('Respuesta del servidor:', response);
    return response.data;
  } catch (error) {
    console.error('Error detallado:', error.response || error);
    throw new Error(`Error al crear el proyecto: ${error.response?.data?.message || error.message}`);
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await api.get( `/projects/${projectId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el proyecto ' + error.message);
  }
};

export const updateProjectById = async (projectId) => {
    try {
      const response = await api.put( `/projects/${projectId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al editar el proyecto ' + error.message);
    }
  };

  export const deleteProject = async (projectId) => {
    try {
      const response = await api.delete( `/projects/${projectId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al borrar el proyecto ' + error.message);
    }
  };

