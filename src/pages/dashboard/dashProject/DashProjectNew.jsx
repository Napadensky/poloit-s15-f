import { DashInputField } from '@/components/DashInputField';
import { DashInputCheckbox } from '@/components/DashInputCheckbox';
import { useState } from 'react';
import { createProject } from '@/services/projectServices';

const DashProjectNew = () => {
  const [file, setFile] = useState(null);
  const [project, setProject] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    rol: '',
    maxParticipantes: '',
    fechaLimite: '',
  });
  const [selectedRoles, setSelectedRoles] = useState([]);

  const rolOptions = [
    { value: 'uxui', text: 'UX UI' },
    { value: 'backend', text: 'Backend' },
    { value: 'frontend', text: 'Frontend' },
    { value: 'testing', text: 'Testing QA' },
  ];
  const handleSelectRoles = (value) => {
    setSelectedRoles(prevRoles => {
      if (prevRoles.includes(value)) {
        return prevRoles.filter(role => role !== value);
      } else {
        return [...prevRoles, value];
      }
    });
    setProject(prevProject => ({
      ...prevProject,
      rol: selectedRoles.join(', ')
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
    try {
      const formData = new FormData();
    Object.keys(project).forEach(key => {
      if (key === 'imagen' && file) {
        formData.append(key, file);
      } else {
        formData.append(key, project[key]);
      }
    });
      const newProject = await createProject(formData);
      console.log('Proyecto creado:', newProject);
    } catch (error) {
      console.error('Error al crear el proyecto:', error.message);
    }
  };
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
     setFile(file);
     setProject(prevProject => ({
      ...prevProject,
      imagen: file.name,
      }));
    }
  };
  const handleFileInput = (e) => {
    handleFileChange(e);
    handleChange(e);
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
        <div className='hidden lg:flex lg:w-5/12 lg:flex-col'>
          <div className='h-[22rem] w-[30rem] rounded-xl border border-dashed border-gray-300 bg-gray-100'>
            <label htmlFor='imagen' className='flex cursor-pointer px-56 pt-40'>
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
            </label>
            <label
              htmlFor='imagen'
              className='flex h-8 cursor-pointer justify-center px-44 pb-36 text-[#D3D7D9]'
            >
              {file ? file.name : 'Subir imagen'}
            </label>
            <input
              type='file'
              id='imagen'
              name='imagen'
              accept='.png, .jpg, .jpeg'
              className='hidden h-full w-full'
              value={project.imagen}
              onChange={handleFileInput}
              required
            />
          </div>
          <DashInputField
            id='descripcion'
            type='text'
            name='descripcion'
            textLabel='Descripción'
            labelClassName='my-4 text-lg font-medium'
            placeholder='Objetivos del proyecto y beneficios de la participación'
            inputClassName='my-2 cursor-pointer flex h-56 w-[30rem] rounded-xl border-0 bg-[#E7F0F8] px-4 py-24 align-middle text-sm font-medium text-gray-400'
            value={project.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className='lg:flex lg:w-5/12 lg:flex-col'>
          <h2 className='mb-4 hidden text-xl font-medium text-[#2F68A1] lg:block'>
            Sobre el Proyecto
          </h2>
          <DashInputField
            id='titulo'
            type='text'
            name='titulo'
            value={project.titulo}
            onChange={handleChange}
            labelClassName='my-2 text-sm font-medium lg:hidden'
            textLabel='¿Cuál es el título del Proyecto?'
            inputClassName='lg:hidden my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar título del proyecto'
          />
          <DashInputField
            id='titulo'
            type='text'
            name='titulo'
            labelClassName='hidden text-lg my-4 lg:block'
            textLabel='Título del Proyecto'
            inputClassName='hidden lg:block my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            placeholder='Ingresar título del proyecto'
            value={project.titulo}
            onChange={handleChange}
          />

          <div className='flex flex-col lg:hidden'>
            <DashInputField
              id='descripcion'
              type='text'
              name='descripcion'
              textLabel='Descripción del Proyecto'
              labelClassName='my-2 text-sm font-medium'
              placeholder='Objetivos del proyecto y beneficios de la participación'
              inputClassName='my-2 flex h-40 w-full rounded-xl border-0 bg-[#E7F0F8] px-4 py-6 align-top text-sm font-medium text-gray-400'
              value={project.descripcion}
              onChange={handleChange}
            />
          </div>
          <DashInputField
            id='fechaLimite'
            type='date'
            name='fechaLimite'
            labelClassName='my-2 text-sm font-medium lg:hidden'
            textLabel='¿Cuál es la fecha límite de inscripción?'
            inputClassName='lg:hidden my-2 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6 text-gray-400'
            placeholder='dd/mm/aa'
            value={project.fechaLimite}
            onChange={handleChange}
          />
          <DashInputField
            id='fechaLimite'
            type='date'
            name='fechaLimite'
            labelClassName='hidden my-4 text-lg font-medium lg:block'
            textLabel='Fecha límite de inscripción'
            inputClassName='hidden lg:block my-2 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6 text-gray-400'
            placeholder='dd/mm/aa'
            value={project.fechaLimite}
            onChange={handleChange}
          />
          <DashInputCheckbox
            fieldsetClassName='my-4 flex flex-row justify-between gap-2'
            legendClassName='my-4 lg:text-lg text-sm font-medium'
            textLegend='¿Qué Roles requiere el proyecto?'
            options={rolOptions}
            name='roles'
            selectedValues={selectedRoles}
            handleSelect={handleSelectRoles}
          />
          <DashInputField
            id='maxParticipantes'
            type='number'
            name='maxParticipantes'
            labelClassName='my-2 text-sm lg:text-lg lg:my-6 font-medium'
            textLabel='¿Cantidad máxima de inscriptos?'
            inputClassName='my-2 lg:my-4 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6 text-gray-400'
            placeholder='Ingrese sólo números'
            value={project.maxParticipantes}
            onChange={handleChange}
          />
          <div className='lg:hidden'>
            <h2 className='my-2 text-sm font-medium'>
              Subir imagen del proyecto
            </h2>
            <div className='h-56 w-full rounded-xl border border-dashed border-gray-300 bg-gray-100'>
              <label
                htmlFor='imagen'
                className='flex cursor-pointer px-44 py-24'
              >
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
              </label>
              <input
                type='file'
                id='imagen'
                name='imagen'
                accept='.png, .jpg, .jpeg'
                className='hidden h-full w-full'
                onChange={handleFileInput}
                required
              />
            </div>
          </div>
          <div className='my-4 flex w-full flex-row justify-between lg:w-[28rem]'>
            <input
              type='reset'
              value='Cancelar'
              className='w-40 cursor-pointer rounded-xl border-2 border-[#DD5A6B] bg-zinc-50 px-6 py-4 text-base font-semibold text-[#DD5A6B] lg:w-52 lg:border-[#2F68A1] lg:text-[#2F68A1]'
            />
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
