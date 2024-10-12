import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjects, deleteProject } from '@/services/projectServices';
import { SubsInputCard } from '@/components/SubsInputCard';
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

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
    <div className='my-4 flex w-full flex-col items-center  gap-4'>
      <Link
        className='flex  bg-blue-500 text-white items-center ml-auto rounded-xl'
        to={`/dashboard/project/new`}
      >
        <PlusIcon className=' stroke-white size-11 p-3  ' />

        <button className='mr-6 text-sm font-medium  lg:text-lg'>
         Crear nuevo proyecto
        </button>
      </Link>
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
              <MagnifyingGlassIcon className='size-4 stroke-[#60B635] lg:size-6' />

              <button className='mr-6 bg-none text-sm font-medium text-[#60B635] underline lg:text-lg'>
                Ver más
              </button>
            </Link>
            <Link
              className='flex flex-row items-center'
              to={`/dashboard/project/edit/${project._id}`}
            >
              <PencilSquareIcon className='size-4 stroke-[#2563eb] lg:size-6' />
              <button className='mr-6 bg-none text-sm font-medium text-blue-600 underline lg:text-lg'>
                Editar
              </button>
            </Link>
            <Link className='flex flex-row items-center' to={`/dashboard/`}>
              <TrashIcon className='size-4 stroke-[#dc2626] lg:size-6' />
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
