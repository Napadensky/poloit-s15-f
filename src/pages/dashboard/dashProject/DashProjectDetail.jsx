import { getProjectById } from '@/services/projectServices';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SquadCard } from '@/components/SquadCard';

const DashProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectById(projectId);

        if (projectData.img && !projectData.img.startsWith('http')) {
          projectData.img = `${import.meta.env.VITE_API_URL}${projectData.img}`;
        }
        setProject(projectData);
      } catch (error) {
        console.error('Error cargando proyecto:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);
  const adjustDate = (dateString) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString();
  };
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (!project) {
    return <div>No se pudo cargar el proyecto...</div>;
  }

  return (
    <div className='m-4 flex flex-col justify-between gap-3'>
      <div className='flex w-full flex-col justify-evenly gap-6 p-4 lg:flex-row'>
        <div
          key={project._id}
          className='flex w-full flex-col content-center gap-6 lg:w-1/3'
        >
          <div className='lg:mx-auto'>
            {project.img && (
              <img
                className='h-40 w-full rounded-xl object-cover lg:h-64 lg:w-96'
                src={
                  project.img.startsWith('http')
                    ? project.img
                    : `${import.meta.env.VITE_API_URL}${project.img}`
                }
                alt='Imagen del proyecto'
              />
            )}
          </div>
          <h2 className='text-lg font-semibold text-[#1C3D5F]'>
            {project.title}
          </h2>
          <p className='text-sm font-normal text-gray-600'>
            Duración: El proyecto inicia el {adjustDate(project.startDate)},
            entrega el {adjustDate(project.endDate)}
          </p>
          <p className='text-sm font-normal text-gray-600'>
            Cantidad de squads :
          </p>
          <p className='text-sm font-normal text-gray-600'>
            {project.description}
          </p>
        </div>
        <div className='flex w-full flex-col gap-3 lg:w-1/3'>
          <Link to={`/DashBoard/SquadDetail/`}>
            <SquadCard squadName='Squads' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { DashProjectDetail };
