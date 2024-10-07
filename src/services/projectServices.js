import { api } from "./api";


export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los proyectos ' + error.message);
  }
};

export const createProject = async (formData) => {
  try {
    console.log('Enviando datos del proyecto:', formData);
    console.log('tags enviados', formData.get('tags'));
    for (let [key, value] of formData.entries()) {
      console.log(key, value instanceof File ? value.name : value);
    }
    const response = await api.post('/projects', formData,{
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
//obtener tags para creación del proyecto
export const getTags = async () => {
  try {
    const response = await api.get('/tags');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los tags: ' + error.message);
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

export const updateProjectById = async (projectId, formData) => {
    try {
      console.log('Datos enviados al backend:', Object.fromEntries(formData));
      const response = await api.put( `/projects/${projectId}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }); 
      console.log('Respuesta del backend:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error detallado:', error.response || error);
      throw new Error(`Error al editar el proyecto: ${error.response?.data?.message || error.message}`);
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

