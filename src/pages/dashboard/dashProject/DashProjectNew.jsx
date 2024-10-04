import { DashInputField } from '@/components/DashInputField';
import { useEffect, useState } from 'react';
import { createProject } from '@/services/projectServices';
import { useNavigate } from 'react-router-dom';

const DashProjectNew = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const InitialProject = {
    title: '',
    description: '',
    modalidad: '',
    plataforma: '',
    precio: 0,
    img: '',
    maxStudents: '',
    active: false,
  };
  const [project, setProject] = useState(InitialProject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: name === 'startDate' || name === 'endDate' ? value : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation(true);
  };
  const handleConfirmation = async () => {
    try {
      if (!file) {
        throw new Error('Por favor, selecciona una imagen para el proyecto.');
      }

      const formData = new FormData();

      Object.keys(project).forEach((key) => {
        if (key !== 'img') {
          formData.append(key, project[key]);
        }
      });
      formData.append('img', file, file.name);

      formData.set('active', 'true');
      console.log('Contenido de FormData:');
      for (let [key, value] of formData.entries()) {
        console.log(key, value instanceof File ? value.name : value);
      }
      const newProject = await createProject(formData);

      console.log('Proyecto creado:', newProject);
      setModal(true);
      setConfirmation(false);
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
    redirigir('/dashboard');
  };
  const handleCancelar = () => {
    setConfirmation(false);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProject((prevProject) => ({
        ...prevProject,
        img: selectedFile.name,
      }));
    }
  };
  const handleReset = () => {
    setProject(InitialProject);
    setFile(null);
    setPreview(null);
  };
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const redirigir = useNavigate();
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
        <div className='lg:order-3'>
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
        <div className='flex flex-col lg:order-4 lg:row-span-2 lg:justify-center'>
          <label htmlFor='description' className='my-2 text-sm font-medium'>
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
        <div className='lg:order-6'>
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

        <div className='lg:order-7'>
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
        <div className='lg:order-9'>
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

        <div className='lg:order-11'>
          <DashInputField
            id='precio'
            type='number'
            name='precio'
            value={project.precio}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es el precio del Proyecto?'
            textLabelDesktop='Precio del Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar precio'
          />
        </div>
        <div className='lg:order-1 lg:row-span-2 lg:mt-4'>
          <h2 className='my-2 text-sm font-medium'>
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
        <div className='my-4 flex w-full flex-row justify-between lg:order-[16] lg:mt-11 lg:h-fit lg:w-[28rem]'>
          <button
            type='button'
            onClick={handleReset}
            className='w-40 cursor-pointer rounded-xl border-2 border-[#DD5A6B] bg-zinc-50 px-4 py-4 text-base font-semibold text-[#DD5A6B] lg:w-52 lg:border-[#2F68A1] lg:px-6 lg:text-[#2F68A1]'
          >
            Cancelar
          </button>
          <input
            type='submit'
            value='Crear proyecto'
            className='cursor-pointer rounded-xl bg-[#2F68A1] px-6 py-4 text-base font-semibold text-zinc-50 lg:w-52'
          />
        </div>
      </form>
      {confirmation && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='rounded-lg border-2 border-zinc-500 bg-[#F4F5F6] p-8'>
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              Estás a punto de crear un proyecto
            </h2>
            <p className='mb-4 text-sm font-normal text-[#4B5358]'>
              ¿Desea cargar proyecto?
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
              ¡Proyecto creado correctamente!
            </h2>
            <p className='mb-4 mr-auto text-sm font-normal text-[#4B5358]'>
              Ya podes visualizar el proyecto.
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

export { DashProjectNew };
