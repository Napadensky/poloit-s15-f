import { DashInputField } from '@/components/DashInputField';
import { DashInputCheckbox } from '@/components/DashInputCheckbox';
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
    days: [],
    startDate: '',
    endDate: '',
    startHour: '',
    endHour: '',
    duration: 0,
    img: '',
    students: [],
    maxStudents: '',
    active: false,
  };
  const [project, setProject] = useState(InitialProject);

  const rolOptions = [
    { value: 'UX/UI', text: 'UX UI' },
    { value: 'Backend', text: 'Backend' },
    { value: 'Frontend', text: 'Frontend' },
    { value: 'QA', text: 'Testing QA' },
  ];
  const scheduleOptions = [
    { value: 'Lunes', text: 'Lunes' },
    { value: 'Martes', text: 'Martes' },
    { value: 'Miercoles', text: 'Miércoles' },
    { value: 'Jueves', text: 'Jueves' },
    { value: 'Viernes', text: 'Viernes' },
    { value: 'Sábado', text: 'Sábado' },
    { value: 'Domingo', text: 'Domingo' },
  ];

  const handleSelectRoles = (value) => {
    setProject((prevProject) => {
      const updatedTags = prevProject.students.includes(value)
        ? prevProject.students.filter((student) => student !== value)
        : [...prevProject.students, value];

      const updatedProject = {
        ...prevProject,
        students: updatedTags,
      };

      return updatedProject;
    });
  };
  const handleSelectSchedules = (value) => {
    setProject((prevProject) => {
      const updatedSchedules = prevProject.days.includes(value)
        ? prevProject.days.filter((day) => day !== value)
        : [...prevProject.days, value];

      return {
        ...prevProject,
        days: updatedSchedules,
      };
    });
  };

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
       const updatedProject = {
      ...project,
      active: true,
       };
    
    const formData = new FormData();

    Object.keys(updatedProject).forEach((key) => {
      if (key === 'img' && file) {
        formData.append(key, file);
      } else if (key === 'students') {
        formData.append(key, JSON.stringify(updatedProject[key]));
      } else {
        formData.append(key, updatedProject[key]);
      }
    });
    try {
      const newProject = await createProject(updatedProject);

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
        <div className='lg:order-5'>
          <DashInputCheckbox
            className='my-4 flex flex-col justify-between gap-2'
            labelClassName='my-4 lg:text-lg text-sm font-medium'
            textLegend='¿Qué Roles requiere el proyecto?'
            options={rolOptions}
            name='roles'
            selectedValues={project.students}
            handleSelect={handleSelectRoles}
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
        <div className='lg:order-8'>
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
            value={project.startDate}
          />
        </div>
        <div className='lg:order-10'>
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
            value={project.endDate}
          />
        </div>
        <div className='lg:order-12'>
          <DashInputField
            id='startHour'
            type='text'
            name='startHour'
            value={project.startHour}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la hora de inicio de las reuniones?'
            textLabelDesktop='Hora de inicio de las reuniones'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar hora de inicio'
          />
        </div>
        <div className='lg:order-[14]'>
          <DashInputField
            id='endHour'
            type='text'
            name='endHour'
            value={project.endHour}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la hora de finalización de las reuniones?'
            textLabelDesktop='Hora de finalización de las reuniones'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar hora de finalización'
          />
        </div>
        <div className='lg:order-[13] lg:-mt-8'>
          <DashInputCheckbox
            className='my-4 flex w-full flex-col justify-between gap-2'
            labelClassName='my-4 flex-wrap  lg:text-lg text-sm font-medium'
            textLegend='¿Qué días se realizará el proyecto?'
            options={scheduleOptions}
            name='schedules'
            selectedValues={project.days}
            handleSelect={handleSelectSchedules}
          />
        </div>
        <div className='lg:order-[15]'>
          <DashInputField
            id='duration'
            type='number'
            name='duration'
            value={project.duration}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la duración de las reuniones?'
            textLabelDesktop='Duración de las reuniones'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar duración de las reuniones'
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              Estás a punto de crear un proyecto</h2>
            <p className="mb-4">
            ¿Desea cargar proyecto?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelar}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmation}
                className="bg-[#2F68A1] text-white px-4 py-2 rounded"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black   bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path
                fillRule='evenodd'
                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                clipRule='evenodd'
              />
            </svg>
            <h2 className='text-xl font-bold mb-4'>¡Proyecto creado correctamente!</h2>
            <p className='text-sm mb-4'>Ya podes visualizar el proyecto.</p>
            <button 
              onClick={handleCloseModal}
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DashProjectNew };
