import { useEffect, useState } from 'react';
import {
  updateProjectById,
  getTags,
  getProjectById,
} from '@/services/projectServices';
import { useNavigate, useParams } from 'react-router-dom';
import { DashInputCheckbox } from '@/components/DashInputCheckbox';
import { DashInputField } from '@/components/DashInputField';

const DashProjectEdit = () => {
  const { projectId } = useParams();
  const [tags, setTags] = useState([]);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Estado actual del proyecto:', project);
  }, [project]);
  useEffect(() => {
    const fetchProjectAndTags = async () => {
      try {
        const [projectData, tagsData] = await Promise.all([
          getProjectById(projectId),
          getTags(),
        ]);
        if (projectData.startDate) {
          projectData.startDate = new Date(projectData.startDate)
            .toISOString()
            .split('T')[0];
        }
        if (projectData.endDate) {
          projectData.endDate = new Date(projectData.endDate)
            .toISOString()
            .split('T')[0];
        }

        if (projectData.img && !projectData.img.startsWith('http')) {
          projectData.img = `${import.meta.env.VITE_API_URL}/uploads/${projectData.img}`;
        }
        setProject(projectData);
        setTags(tagsData);
        setPreview(projectData.img);
      } catch (error) {
        console.error('Error obteniendo los datos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectAndTags();
  }, [projectId]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (project && project.img) {
      setPreview(project.img);
    } else {
      setPreview(null);
    }
  }, [file, project]);

  const handleSelectTag = (value) => {
    setProject((prevProject) => ({
      ...prevProject,
      tag: prevProject.tag.includes(value)
        ? prevProject.tag.filter((t) => t !== value)
        : [...prevProject.tag, value],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation(true);
  };
  const handleConfirmation = async () => {
    try {
      const formData = new FormData();

      Object.keys(project).forEach((key) => {
        if (key === 'tag') {
          formData.append('tag', JSON.stringify(project.tag));
        } else if (key !== 'img') {
          formData.append(key, project[key]);
        }
      });
      if (file) {
        formData.append('img', file);
      }
      const sentData = Object.fromEntries(formData);
      console.log('Datos enviados al backend:', sentData);
      const updatedProject = await updateProjectById(projectId, formData);
      console.log('Respuesta del backend:', updatedProject);
      Object.keys(sentData).forEach(key => {
        if (sentData[key] !== updatedProject[key]) {
          console.log(`Discrepancia en ${key}:`, 'Enviado:', sentData[key], 'Recibido:', updatedProject[key]);
        }
      });
      
      if (updatedProject.startDate) {
        updatedProject.startDate = new Date(updatedProject.startDate).toISOString().split('T')[0];
      }
      if (updatedProject.endDate) {
        updatedProject.endDate = new Date(updatedProject.endDate).toISOString().split('T')[0];
      }
  
      console.log('Proyecto editado (con fechas ajustadas):', updatedProject);
     

      setProject(updatedProject);
      setModal(true);
      setConfirmation(false);
    } catch (error) {
      console.error('Error al editar el proyecto:', error);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
    navigate('/dashboard');
  };
  const handleCancelar = () => {
    setConfirmation(false);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setProject((prevProject) => ({
        ...prevProject,
        img: selectedFile,
      }));
    }
  };
  const handleReset = () => {
    setProject(null);
    setFile(null);
    setPreview(null);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!project) {
    return <div>No se pudo cargar el proyecto.</div>;
  }

  return (
    <div className='m-4 text-neutral-800'>
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'
      >
        <h1 className='text-xl font-bold text-neutral-800 lg:hidden'>
          Crear proyecto
        </h1>
        <h2 className='mb-4 hidden content-center text-xl font-medium text-[#2F68A1] lg:order-2 lg:block'>
          Sobre el Proyecto
        </h2>
        <div className='lg:order-3 lg:mt-auto'>
          <DashInputField
            id='title'
            type='text'
            name='title'
            value={project.title}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es el título del Proyecto?'
            textLabelDesktop='Título del Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar título del proyecto'
          />
        </div>
        <div className='flex flex-col lg:order-4 lg:justify-center'>
          <label
            htmlFor='description'
            className='my-2 text-sm font-medium lg:text-lg'
          >
            Descripción del Proyecto
          </label>
          <textarea
            id='description'
            name='description'
            className='my-2 h-40 w-full resize-none overflow-auto break-words rounded-xl border-0 bg-[#E7F0F8] px-4 py-6 text-sm font-medium'
            placeholder='Objetivos del proyecto y beneficios de la participación'
            value={project.description}
            onChange={handleChange}
          />
        </div>
        <div className='lg:order-10'>
          <DashInputField
            id='maxStudents'
            type='number'
            name='maxStudents'
            labelClassName='my-2 text-sm lg:text-lg lg:my-6 font-medium'
            textLabelMobile='¿Cantidad máxima de inscriptos?'
            textLabelDesktop='Cantidad máxima de inscriptos'
            inputClassName='my-2  lg:my-4 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingrese sólo números'
            value={project.maxStudents}
            onChange={handleChange}
          />
        </div>
        <div className='lg:order-5'>
          <DashInputCheckbox
            className='my-4 flex flex-col justify-between gap-2'
            labelClassName='my-4 lg:text-lg text-sm font-medium'
            textLegend='¿Qué Roles requiere el proyecto?'
            options={tags.map((tag) => ({ value: tag._id, text: tag.name }))}
            name='tag'
            selectedValues={project.tag}
            handleSelect={handleSelectTag}
          />
        </div>

        <div className='lg:order-6'>
          <DashInputField
            id='modalidad'
            type='text'
            name='modalidad'
            value={project.modalidad}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la modalidad del Proyecto?'
            textLabelDesktop='Modalidad del Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar modalidad del proyecto'
          />
        </div>
        <div className='lg:order-8'>
          <DashInputField
            id='plataforma'
            type='text'
            name='plataforma'
            value={project.plataforma}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la plataforma utilizada en el Proyecto?'
            textLabelDesktop='Plataforma utilizada en el Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar plataforma'
          />
        </div>
        <div className='lg:order-7'>
          <DashInputField
            id='startDate'
            type='date'
            name='startDate'
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha de inicio del Proyecto?'
            textLabelDesktop='Fecha de inicio del Proyecto'
            inputClassName='my-2  mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='yyyy/mm/dd'
            onChange={handleChange}
            value={project.startDate || ''}
          />
        </div>
        <div className='lg:order-9'>
          <DashInputField
            id='endDate'
            type='date'
            name='endDate'
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha de finalización del Proyecto?'
            textLabelDesktop='Fecha de finalización del Proyecto'
            inputClassName='my-2  mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='yyyy/mm/dd'
            onChange={handleChange}
            value={project.endDate || ''}
          />
        </div>

        <div className='lg:order-1 lg:row-span-2'>
          <h2 className='my-2 text-sm font-medium lg:hidden'>
            Subir imagen del proyecto
          </h2>
          <div className='h-56 w-full rounded-xl border border-dashed border-gray-300 bg-gray-100'>
            <label
              htmlFor='img'
              className='flex h-full w-full items-center justify-center'
            >
              {preview ? (
                <img
                  src={preview}
                  alt='Imagen del proyecto'
                  className='h-full w-full object-cover'
                />
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M3 16.5V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V16.5M7.5 7.5L12 3M12 3L16.5 7.5M12 3V16.5'
                    stroke='#D3D7D9'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </label>
            <input
              type='file'
              id='img'
              name='img'
              accept='.png, .jpg, .jpeg'
              className='hidden'
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className='my-4 flex w-full flex-row justify-between lg:order-11 lg:ml-auto lg:mt-11 lg:h-fit lg:w-[28rem]'>
          <button
            type='button'
            onClick={handleReset}
            className='w-40 cursor-pointer rounded-xl border-2 border-[#DD5A6B] bg-zinc-50 px-4 py-4 text-base font-semibold text-[#DD5A6B] lg:w-52 lg:border-[#2F68A1] lg:px-6 lg:text-[#2F68A1]'
          >
            Cancelar
          </button>
          <input
            type='submit'
            value='Editar proyecto'
            className='cursor-pointer rounded-xl bg-[#2F68A1] px-6 py-4 text-base font-semibold text-zinc-50 lg:w-52'
          />
        </div>
      </form>
      {confirmation && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='rounded-lg border-2 border-zinc-500 bg-[#F4F5F6] p-8'>
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              Estás a punto de editar un proyecto
            </h2>
            <p className='mb-4 text-sm font-normal text-[#4B5358]'>
              ¿Desea editar el proyecto?
            </p>
            <div className='flex justify-end space-x-4'>
              <button
                onClick={handleCancelar}
                className='bg-transparent px-4 py-2 text-sm font-medium text-[#CD1D1D] underline'
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmation}
                className='bg-transparent px-4 py-2 text-sm font-medium text-[#60B635] underline'
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-[#60B635] bg-[#F0F9EB] p-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='#60B635'
              className='size-6'
            >
              <path
                fillRule='evenodd'
                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                clipRule='evenodd'
              />
            </svg>
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              ¡Proyecto editado correctamente!
            </h2>
            <p className='mb-4 mr-auto text-sm font-normal text-[#4B5358]'>
              Ya podés visualizar el proyecto.
            </p>
            <button
              onClick={handleCloseModal}
              className='ml-auto bg-transparent px-4 py-2 text-[#3A6F20] underline'
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DashProjectEdit };
