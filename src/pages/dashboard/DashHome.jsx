import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjects , deleteProject} from '@/services/projectServices';

const DashHome = () => {
    console.log(import.meta.env)
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
    return(
        <div>
            <h1>Dashboard</h1>
            {projects.map((project)=>(
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Link to={`/dashboard/project/edit/${project._id}`}>
                        <button className='bg-blue-600'>editar</button>
                    </Link>
                    <Link to={`/dashboard/`}>
                        <button className='bg-red-600'
                        onClick={() => handleDelete(project._id)}>borrar</button>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export {DashHome}
