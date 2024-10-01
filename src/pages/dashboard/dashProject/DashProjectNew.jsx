import { DashInputField } from '@/components/DashInputField';
import { DashInputCheckbox } from '@/components/DashInputCheckbox';
import { useEffect, useState } from 'react';
import { createProject } from '@/services/projectServices';

const DashProjectNew = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const InitialProject = {
    title: '',
    description: '',
    img: '',
    tag: [],
    maxStudents: '',
    schedules: '',
  };
  const [project, setProject] = useState(InitialProject);

  const rolOptions = [
    { value: 'uxui', text: 'UX UI' },
    { value: 'backend', text: 'Backend' },
    { value: 'frontend', text: 'Frontend' },
    { value: 'testing', text: 'Testing QA' },
  ];
  const handleSelectRoles = (value) => {
    setProject((prevProject) => {
      const updatedTags = prevProject.tag.includes(value)
        ? prevProject.tag.filter((tag) => tag !== value)
        : [...prevProject.tag, value];

      const updatedProject = {
        ...prevProject,
        tag: updatedTags,
      };
      console.log('Proyecto actualizado:', updatedProject);
      return updatedProject;
    });
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
    console.log('Datos del proyecto antes de enviar:', project);
    
      const formData = new FormData();
      Object.keys(project).forEach((key) => {
        if (key === 'img' && file) {
          formData.append(key, file);
        } else if (key === 'tag') {
          formData.append(key, JSON.stringify(project[key]));
        } else {
          formData.append(key, project[key]);
        }
      });
      console.log('FormData antes de enviar:');
    for (let [key, value] of formData.entries()) {
      console.log(key, typeof value, value);
    }
    try{
      const newProject = await createProject(formData);
      console.log('Proyecto creado:', newProject);
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
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
   
  return (
    <div className='m-4 flex flex-col gap-3 text-neutral-800'>
      <h1 className='text-xl font-bold text-neutral-800 lg:hidden'>
        Crear proyecto
      </h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col lg:flex-row lg:justify-between'
      >
        <div className='lg:flex lg:w-5/12 lg:flex-col'>
          <h2 className='mb-4 hidden text-xl font-medium text-[#2F68A1] lg:block'>
            Sobre el Proyecto
          </h2>
          <DashInputField
            id='title'
            type='text'
            name='title'
            value={project.title}
            onChange={handleChange}
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es el título del Proyecto?'
            textLabelDesktop='Título del Proyecto'
            inputClassName='my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar título del proyecto'
          />
          <div className='flex flex-col'>
            <label htmlFor='description' className='my-2 text-sm font-medium'>Descripción del Proyecto</label>
            <textarea
              id='description'
              name='description'
              className='my-2 h-40 w-full rounded-xl border-0 bg-[#E7F0F8] px-4 py-6 text-sm font-medium resize-none overflow-auto break-words'
              placeholder='Objetivos del proyecto y beneficios de la participación'
              value={project.description}
              onChange={handleChange}
            />
            
          </div>
          <DashInputField
            id='schedules'
            type='date'
            name='schedules'
            labelClassName='my-2 lg:my-4 text-sm lg:text-lg font-medium'
            textLabelMobile='¿Cuál es la fecha límite de inscripción?'
            textLabelDesktop='Fecha límite de inscripción'
            inputClassName='my-2 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='dd/mm/aa'
            value={project.schedules}
            onChange={handleChange}
          />

          <DashInputCheckbox
            className='my-4 flex flex-col justify-between gap-2'
            labelClassName='my-4 lg:text-lg text-sm font-medium'
            textLegend='¿Qué Roles requiere el proyecto?'
            options={rolOptions}
            name='roles'
            selectedValues={project.tag}
            handleSelect={handleSelectRoles}
          />
          <DashInputField
            id='maxStudents'
            type='number'
            name='maxStudents'
            labelClassName='my-2 text-sm lg:text-lg lg:my-6 font-medium'
            textLabelMobile='¿Cantidad máxima de inscriptos?'
            textLabelDesktop='Cantidad máxima de inscriptos'
            inputClassName='my-2 lg:my-4 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingrese sólo números'
            value={project.maxStudents}
            onChange={handleChange}
          />
          <div>
            <h2 className='my-2 text-sm font-medium '>
              Subir imagen del proyecto
            </h2>
            <div className='h-56 w-full rounded-xl border border-dashed border-gray-300 bg-gray-100'>
              <label
                htmlFor='img'
                className='h-full w-full flex items-center justify-center'
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
          <div className='my-4 flex w-full flex-row justify-between lg:w-[28rem]'>
          <button
        type='button'
        onClick={handleReset}
        className='w-40 cursor-pointer rounded-xl border-2 border-[#DD5A6B] bg-zinc-50 px-6 py-4 text-base font-semibold text-[#DD5A6B] lg:w-52 lg:border-[#2F68A1] lg:text-[#2F68A1]'
      >
        Cancelar
      </button>
            <input
              type='submit'
              value='Crear proyecto'
              className='cursor-pointer rounded-xl bg-[#2F68A1] px-6 py-4 text-base font-semibold text-zinc-50 lg:w-52'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { DashProjectNew };
