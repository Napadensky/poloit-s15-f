import { DashInputField } from '@/components/DashInputField';
import { useEffect, useState } from 'react';
import { createProject } from '@/services/projectServices';
import { useNavigate } from 'react-router-dom';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { DashConfirmModal } from '@/components/DashConfirmModal';
import { DashSuccessModal } from '@/components/DashSuccessModal';
import { handleChange, handleCloseModal } from '@/utils/projectUtils';
import { DashInputRoles } from '@/components/DashInputRoles';

const DashProjectNew = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const InitialProject = {
    title: '',
    description: '',
    img: '',
    maxStudents: '',
    active: false,
    startDate: '',
    endDate: '',
    uxui: '',
    backend: '',
    frontend: '',
    qa: '',
  };
  const [project, setProject] = useState(InitialProject);
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const redirigir = useNavigate();

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
  const handleChg = (e) => handleChange(e, setProject);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const camposRequeridos = [
      'title',
      'description',
      'maxStudents',
      'startDate',
      'endDate',
    ];
    const camposVacios = camposRequeridos.filter((campo) => !project[campo]);
    if (camposVacios.length > 0 || !file) {
      alert('Falta completar campos obligatorios');
      return;
    }
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
      await createProject(formData);

      setModal(true);
      setConfirmation(false);
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };
  // const handleCMdl = () => handleCloseModal(setModal, redirigir);
  const handleCancelar = () => {
    setConfirmation(false);
  };
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
  const handleCancel = () => {
    redirigir('/dashboard');
  };
  return (
    <div className='m-4 text-neutral-800'>
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4'
      >
        <h1 className='text-xl font-bold text-neutral-800 lg:hidden'>
          Crear proyecto
        </h1>
        <h2 className='hidden content-center text-xl font-medium text-[#2F68A1] lg:order-2 lg:block'>
          Sobre el Proyecto
        </h2>
        <div className='lg:order-3'>
          <DashInputField
            id='title'
            type='text'
            name='title'
            value={project.title}
            onChange={handleChg}
            labelClassName=' text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es el título del Proyecto?'
            textLabelDesktop='Título del Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-3'
            placeholder='Ingresar título del proyecto'
          />
        </div>
        <div className='flex flex-col lg:order-5 lg:justify-center'>
          <label
            htmlFor='description'
            className='text-sm font-medium lg:text-lg'
          >
            Descripción del Proyecto
          </label>
          <textarea
            id='description'
            name='description'
            className='my-2 h-full w-full resize-none overflow-auto break-words rounded-xl border-0 bg-[#E7F0F8] p-2 text-sm font-medium focus:outline-none'
            placeholder='Objetivos del proyecto y beneficios de la participación'
            value={project.description}
            onChange={handleChg}
          />
        </div>
        <div className='lg:order-4'>
          <DashInputField
            id='maxStudents'
            type='number'
            name='maxStudents'
            labelClassName='my-2 text-sm lg:text-lg  font-medium'
            textLabelMobile='¿Cantidad máxima de Squads?'
            textLabelDesktop='Cantidad máxima de Squads'
            inputClassName='my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-3'
            placeholder='Ingrese sólo números'
            value={project.maxStudents}
            onChange={handleChg}
          />
        </div>
        <div className='lg:order-6'>
          <DashInputField
            id='startDate'
            type='date'
            name='startDate'
            labelClassName='my-2  text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha de inicio del Proyecto?'
            textLabelDesktop='Fecha de inicio del Proyecto'
            inputClassName='my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-3'
            placeholder='yyyy/mm/dd'
            onChange={handleChg}
            value={project.startDate}
          />
        </div>
        <div className='lg:order-8'>
          <DashInputField
            id='endDate'
            type='date'
            name='endDate'
            labelClassName='my-2  text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha de finalización del Proyecto?'
            textLabelDesktop='Fecha de finalización del Proyecto'
            inputClassName='my-2   w-full rounded-xl border-0 bg-[#E7F0F8] p-3 '
            placeholder='yyyy/mm/dd'
            onChange={handleChg}
            value={project.endDate}
          />
        </div>
        <div className='flex flex-col lg:order-7 lg:row-span-2 lg:justify-between'>
          <p className='text-sm font-medium lg:text-lg'>
            Número de integrantes por rol:
          </p>
          <div className='flex flex-row justify-between gap-3 lg:gap-6'>
            <DashInputRoles
              value='uxui'
              text='UX/UI'
              input={project.uxui}
              onChange={handleChg}
            />
            <DashInputRoles
              value='frontend'
              text='Frontend'
              input={project.frontend}
              onChange={handleChg}
            />
          </div>
          <div className='flex flex-row justify-between gap-3 lg:gap-6'>
            <DashInputRoles
              value='backend'
              text='Backend'
              input={project.backend}
              onChange={handleChg}
            />
            <DashInputRoles
              value='qa'
              text='Testing QA'
              input={project.qa}
              onChange={handleChg}
            />
          </div>
        </div>

        <div className='mb-auto lg:order-1 lg:row-span-3'>
          <h2 className='my-2 text-sm font-medium lg:hidden'>
            Subir imagen del proyecto (*.png, *.jpg, *.jepg)
          </h2>
          <div className='h-64 rounded-xl border border-dashed border-gray-300 bg-gray-100'>
            <label
              htmlFor='img'
              className='flex h-full w-full items-center justify-center'
            >
              {preview ? (
                <img
                  src={preview}
                  alt='Imagen del proyecto'
                  className='h-48 w-96 object-scale-down'
                />
              ) : (
                <ArrowUpTrayIcon className='size-6 self-center stroke-[#D3D7D9]' />
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
        <div className='flex w-full flex-row justify-between lg:order-9 lg:ml-auto lg:mt-auto lg:h-fit lg:w-[28rem]'>
          <button
            type='button'
            onClick={handleCancel}
            className='w-40 cursor-pointer rounded-xl border-2 border-[#DD5A6B] bg-zinc-50 px-4 py-3 text-base font-semibold text-[#DD5A6B] lg:w-52 lg:border-[#2F68A1] lg:px-6 lg:text-[#2F68A1]'
          >
            Cancelar
          </button>
          <input
            type='submit'
            value='Crear proyecto'
            className='cursor-pointer rounded-xl bg-[#2F68A1] px-6 py-3 text-base font-semibold text-zinc-50 lg:w-52'
          />
        </div>
      </form>
      {confirmation && (
        <DashConfirmModal
          onClickCanc={handleCancelar}
          onClickConf={handleConfirmation}
          titleText='Estás a punto de crear un proyecto'
          questionText='¿Desea cargar proyecto?'
        />
      )}
      {modal && (
        <DashSuccessModal
          onClickMod={() => handleCloseModal(setModal, redirigir)}
          titleText='¡Proyecto creado correctamente!'
          descripText=' Ya podés visualizar el proyecto.'
        />
      )}
    </div>
  );
};

export { DashProjectNew };
