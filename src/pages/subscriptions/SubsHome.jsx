import { useState, useEffect } from 'react';
import { SubsInputCard } from '@/components/SubsInputCard';
import { getProjects } from '@/services/projectServices';
import { useSendEmail } from '@/hooks/useEmail';

const SubsHome = () => {
  const [projects, setProjects] = useState([]);
  const { triggerEmail } = useSendEmail();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error obteniendo proyectos:', error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <section className='my-4 flex flex-col gap-4'>
        <h1 className='text-lg font-semibold text-[#262A2C]'>
          Proyecto Colaborativo
        </h1>
        <p className='text-base font-normal text-[#262A2C]'>
          Una oportunidad para conectar, crear y crecer en equipo
        </p>
        {projects.map((project) => (
          <SubsInputCard key={project._id} {...project} />
        ))}
      </section>
      <section className='my-8 flex flex-col gap-4'>
        <h2 className='text-lg font-semibold text-[#262A2C]'>Contactanos</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            triggerEmail({
              to: import.meta.env.VITE_API_MAIL,
              subject: e.target.subject.value,
              text: e.target.message.value,
            });
            e.target.subject.value = '';
            e.target.message.value = '';
          }}
        >
          <div className='mb-4'>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700'
            >
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              placeholder='Asunto del correo'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              rows='3'
              className='mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              placeholder='Escribe tu mensaje aquí...'
              required
            ></textarea>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Enviar correo
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export { SubsHome };
