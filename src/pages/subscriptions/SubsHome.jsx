import { useState, useEffect } from 'react';
import { SubsInputCard } from '@/components/SubsInputCard';
import { getProjects } from '@/services/projectServices';

const SubsHome = () => {
  const [projects, setProjects] = useState([]);

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
    </>
  );
};

export { SubsHome };
