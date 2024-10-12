import { DashInputField } from '@/components/DashInputField';
import { useEffect, useState } from 'react';
import { createProject, getTags } from '@/services/projectServices';
import { useNavigate } from 'react-router-dom';
import { DashInputCheckbox } from '@/components/DashInputCheckbox';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const DashProjectNew = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [tags, setTags] = useState([]);

  const InitialProject = {
    title: '',
    description: '',
    img: '',
    maxStudents: '',
    active: false,
    tag: [],
    startDate: '',
    endDate: '',
  };

  const [project, setProject] = useState(InitialProject);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tagsData = await getTags();
        setTags(tagsData);
      } catch (error) {
        console.error('Error obteniendo los tags:', error);
      }
    };

    fetchTags();
  }, []);
  const handleSelectTag = (value) => {
    setProject((prevProject) => {
      const updatedTag = prevProject.tag.includes(value)
        ? prevProject.tag.filter((t) => t !== value)
        : [...prevProject.tag, value];
      return {
        ...prevProject,
        tag: updatedTag,
      };
    });
  };

  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const camposRequeridos = [
      'title',
      'description',
      'maxStudents',
      'tag',
      'startDate',
      'endDate',
    ];
    const camposVacios = camposRequeridos.filter((campo) => !project[campo]);
    if (camposVacios.length > 0 || !file || project.tag.length === 0) {
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
          if (key === 'tag') {
            formData.append('tag', JSON.stringify(project.tag));
          } else {
            formData.append(key, project[key]);
          }
        }
      });
      formData.append('img', file, file.name);

      formData.set('active', 'true');

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

  const redirigir = useNavigate();
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
            onChange={handleChange}
            labelClassName=' text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es el título del Proyecto?'
            textLabelDesktop='Título del Proyecto'
            inputClassName='my-2  w-full rounded-xl border-0 bg-[#E7F0F8] p-3'
            placeholder='Ingresar título del proyecto'
          />
        </div>
        <div className='flex flex-col lg:order-5 lg:row-span-2 lg:justify-center'>
          <label
            htmlFor='description'
            className='my-2 text-sm font-medium lg:text-lg'
          >
            Descripción del Proyecto
          </label>
          <textarea
            id='description'
            name='description'
            className='my-2 h-full w-full resize-none overflow-auto break-words rounded-xl border-0 bg-[#E7F0F8] p-2 text-sm font-medium focus:outline-none'
            placeholder='Objetivos del proyecto y beneficios de la participación'
            value={project.description}
            onChange={handleChange}
          />
        </div>
        <div className='lg:order-8'>
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
            onChange={handleChange}
          />
        </div>
        <div className='lg:order-4'>
          <DashInputCheckbox
            className='flex flex-col justify-between gap-2 p-3'
            labelClassName='lg:text-lg text-sm font-medium'
            textLegend='¿Qué Roles requiere el proyecto?'
            options={tags.map((tag) => ({ value: tag._id, text: tag.name }))}
            name='tag'
            selectedValues={project.tag}
            handleSelect={handleSelectTag}
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
            onChange={handleChange}
            value={project.startDate}
          />
        </div>
        <div className='lg:order-7'>
          <DashInputField
            id='endDate'
            type='date'
            name='endDate'
            labelClassName='my-2  text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha de finalización del Proyecto?'
            textLabelDesktop='Fecha de finalización del Proyecto'
            inputClassName='my-2   w-full rounded-xl border-0 bg-[#E7F0F8] p-3 '
            placeholder='yyyy/mm/dd'
            onChange={handleChange}
            value={project.endDate}
          />
        </div>

        <div className='lg:order-1 lg:row-span-3'>
          <h2 className='my-2 text-sm font-medium lg:hidden'>
            Subir imagen del proyecto (*.png, *.jpg, *.jepg)
          </h2>
          <div className='h-64 rounded-xl border border-dashed border-gray-300 bg-gray-100'>
            <label htmlFor='img' className='flex h-full w-full justify-center'>
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
            onClick={handleReset}
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
            <CheckCircleIcon className='size-6 fill-[#60B635]' />
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              ¡Proyecto creado correctamente!
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

export { DashProjectNew };
