import { useState } from 'react';

const DashProjectNew = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className='m-4 flex flex-col gap-3 text-neutral-800'>
      <h1 className='text-xl font-bold text-neutral-800 lg:hidden'>
        Crear proyecto
      </h1>
      <form className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='hidden lg:flex lg:flex-col lg:w-5/12'>
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
            <label htmlFor="imagen" className='flex cursor-pointer h-8 text-[#D3D7D9] px-44 justify-center'>Subir imagen</label>
            <input
              type='file'
              id='imagen'
              name='imagen'
              accept='.png, .jpg, .jpeg'
              className='hidden h-full w-full'
            />
          </div>
          <h2 className='my-4 text-lg font-medium'>
              Descripción 
            </h2>
            <div>
              <label
                htmlFor='descripcion'
                className='my-2 flex h-56 w-[30rem] rounded-xl border-0 bg-[#E7F0F8] px-4 py-24 align-middle text-sm font-medium text-gray-400'
              >
                Objetivos del proyecto y beneficios de la participación
              </label>

              <input
                type='text'
                id='descripcion'
                name='descripcion'
                className='hidden h-full w-full'
              />
            </div>
        </div>

        <div className='lg:flex lg:flex-col lg:w-5/12'>
          <div>
            <h2 className='hidden lg:block text-xl mb-4 font-medium text-[#2F68A1]'>Sobre el Proyecto</h2>
            <label
              htmlFor='titulo'
              className='my-2 text-sm font-medium lg:hidden'
            >
              ¿Cuál es el título del Proyecto?
            </label>
            <label htmlFor='titulo' className='hidden text-lg my-4 lg:block'>
              Título del Proyecto
            </label>
            <input
              type='text'
              id='titulo'
              name='titulo'
              placeholder='Ingresar título del proyecto'
              className='my-2 w-full rounded-xl border-0 bg-[#E7F0F8] p-6'
            />
          </div>
          <div className='flex flex-col lg:hidden'>
            <h2 className='my-2 text-sm font-medium'>
              Descripción de Proyecto
            </h2>
            <div>
              <label
                htmlFor='descripcion'
                className='my-2 flex h-40 w-full rounded-xl border-0 bg-[#E7F0F8] px-4 py-6 align-top text-sm font-medium text-gray-400'
              >
                Objetivos del proyecto y beneficios de la participación
              </label>

              <input
                type='text'
                id='descripcion'
                name='descripcion'
                className='hidden h-full w-full'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='fecha'
              className='my-2 text-sm font-medium lg:hidden'
            >
              ¿Cuál es la fecha límite de inscripción?
            </label>
            <label htmlFor='fecha' className='hidden my-4 text-lg font-medium lg:block'>
              Fecha límite de inscripción
            </label>
            <input
              type='date'
              id='fecha'
              name='fecha'
              placeholder='dd/mm/aa'
              className='my-2 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6 text-gray-400'
            />
          </div>

          <fieldset className='my-4 flex flex-row justify-between gap-2'>
            <legend className='my-4 lg:text-lg text-sm font-medium'>
              ¿Qué Roles requiere el proyecto?
            </legend>
            <input
              type='radio'
              id='uxui'
              name='roles'
              value='uxui'
              className='hidden'
              checked={selected === 'uxui'}
              onChange={() => handleSelect('uxui')}
            />
            <label
              htmlFor='uxui'
              className={`cursor-pointer rounded-xl px-5 py-3 text-[0.68rem] font-semibold ${selected === 'uxui' ? 'bg-[#2F68A1] text-neutral-50' : 'bg-[#E7F0F8] text-gray-600'}`}
            >
              UX UI
            </label>
            <input
              type='radio'
              id='backend'
              name='roles'
              value='backend'
              className='hidden'
              checked={selected === 'backend'}
              onChange={() => handleSelect('backend')}
            />
            <label
              htmlFor='backend'
              className={`cursor-pointer rounded-xl px-5 py-3 text-[0.68rem] font-semibold ${selected === 'backend' ? 'bg-[#2F68A1] text-neutral-50' : 'bg-[#E7F0F8] text-gray-600'}`}
            >
              Backend
            </label>
            <input
              type='radio'
              id='frontend'
              name='roles'
              value='frontend'
              className='hidden'
              checked={selected === 'frontend'}
              onChange={() => handleSelect('frontend')}
            />
            <label
              htmlFor='frontend'
              className={`cursor-pointer rounded-xl px-5 py-3 text-[0.68rem] font-semibold ${selected === 'frontend' ? 'bg-[#2F68A1] text-neutral-50' : 'bg-[#E7F0F8] text-gray-600'}`}
            >
              Frontend
            </label>
            <input
              type='radio'
              id='testing'
              name='roles'
              value='testing'
              className='hidden'
              checked={selected === 'testing'}
              onChange={() => handleSelect('testing')}
            />
            <label
              htmlFor='testing'
              className={`cursor-pointer rounded-xl px-5 py-3 text-[0.68rem] font-semibold ${selected === 'testing' ? 'bg-[#2F68A1] text-neutral-50' : 'bg-[#E7F0F8] text-gray-600'}`}
            >
              Testing QA
            </label>
          </fieldset>

          <div>
            <label htmlFor='maximo' className='my-2 text-sm lg:text-lg lg:my-6 font-medium'>
              ¿Cantidad máxima de inscriptos?
            </label>
            <input
              type='number'
              id='maximo'
              name='maximo'
              placeholder='Ingrese sólo números'
              className='my-2 lg:my-4 mt-1 w-full rounded-xl border-0 bg-[#E7F0F8] p-6 text-gray-400'
            />
          </div>
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
              />
            </div>
          </div>
          <div className='my-4 flex w-full lg:w-[28rem] flex-row justify-between'>
            <input
              type='reset'
              value='Cancelar'
              className='w-40 lg:w-52 cursor-pointer rounded-xl border-2 border-[#DD5A6B] lg:border-[#2F68A1] bg-zinc-50 px-6 py-4 text-base font-semibold text-[#DD5A6B] lg:text-[#2F68A1]'
            />
            <input
              type='submit'
              value='Crear proyecto'
              className='lg:w-52 cursor-pointer rounded-xl bg-[#2F68A1] px-6 py-4 text-base font-semibold text-zinc-50'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { DashProjectNew };
