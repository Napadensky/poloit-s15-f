import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjects, deleteProject } from '@/services/projectServices';
import { SubsInputCard } from '@/components/SubsInputCard';

const DashHome = () => {
  console.log(import.meta.env);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects(projects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error('Error al borrar el proyecto:', error);
    }
  };
  return (
    <div className='my-4 flex w-full flex-col items-center gap-4'>
      <h1 className='text-lg font-semibold text-[#262A2C] lg:mr-auto'>
        Proyectos
      </h1>
      {projects.map((project) => (
        <div
          key={project._id}
          className='flex w-full flex-col justify-center p-4 lg:w-auto'
        >
          <SubsInputCard
            bottonClassname='hidden'
            key={project._id}
            {...project}
          />
          <div className='flex justify-between gap-2 lg:ml-auto'>
            <Link
              className='flex flex-row items-center'
              to={`/dashboard/project/${project._id}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#60B635'
                className='size-4 lg:size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>

              <button className='mr-6 bg-none text-sm font-medium text-[#60B635] underline lg:text-lg'>
                Ver más
              </button>
            </Link>
            <Link
              className='flex flex-row items-center'
              to={`/dashboard/project/edit/${project._id}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#2563eb'
                className='size-4 lg:size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
              <button className='mr-6 bg-none text-sm font-medium text-blue-600 underline lg:text-lg'>
                Editar
              </button>
            </Link>
            <Link className='flex flex-row items-center' to={`/dashboard/`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#dc2626'
                className='size-4 lg:size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                />
              </svg>
              <button
                className='bg-none text-sm font-medium text-red-600 underline lg:text-lg'
                onClick={() => handleDelete(project._id)}
              >
                Borrar
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export { DashHome };
