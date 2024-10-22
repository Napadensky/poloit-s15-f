import { getProjectById } from '@/services/projectServices';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SquadCard } from '@/components/SquadCard';
import { getSquad } from '@/services/squadService';
import { getEnrolled } from '@/services/subscriptionServices';
import { getMentor } from '@/services/mentorServices';
import { useSendEmail } from '@/hooks/useEmail';

const DashProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [squads, setSquads] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mailSubject, setMailSubject] = useState('');
  const [mailText, setMailText] = useState('');
  const [mailSubjectM, setMailSubjectM] = useState('');
  const [mailTextM, setMailTextM] = useState('');
  const [mailSubjectS, setMailSubjectS] = useState('');
  const [mailTextS, setMailTextS] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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
    const fetchSquads = async () => {
      try {
        const squadsData = await getSquad();
        setSquads(squadsData);
      } catch (error) {
        console.error('Error cargando squads:', error);
      }
    };
    const fetchEnrolled = async () => {
      try {
        const enrolledData = await getEnrolled();
        setEnrolled(enrolledData);
      } catch (error) {
        console.error('Error cargando suscriptos:', error);
      }
    };
    const fetchMentor = async () => {
      try {
        const mentorData = await getMentor();
        setMentors(mentorData);
      } catch (error) {
        console.error('Error cargando mentores:', error);
      }
    };
    fetchProject();
    fetchSquads();
    fetchEnrolled();
    fetchMentor();
  }, [projectId]);
  const mentorMail = mentors.map(mentor => mentor.mail);
  const enrolledMail = enrolled.map(enrolled => enrolled.mail);
  const { triggerEmail } = useSendEmail();
  const adjustDate = (dateString) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString();
  };
  const handleMailMent = async (e) => {
    e.preventDefault();
    const mailData = {
      to: mentorMail,
      subject: mailSubjectM,
      text: mailTextM,
    };
    await triggerEmail(mailData);
    setShowSuccessPopup(true);
    e.target.reset();
  };
  const handleMailSubs = async (e) => {
    e.preventDefault();
    const mailData = {
      to: enrolledMail,
      subject: mailSubjectS,
      text: mailTextS,
    };
    await triggerEmail(mailData);
    setShowSuccessPopup(true);
    e.target.reset();
  };
  const handleMailAll = async (e) => {
    e.preventDefault();
    const mailData = {
      to: [...mentorMail, ...enrolledMail,],
      subject: mailSubject,
      text: mailText,
    };
    await triggerEmail(mailData);
    setShowSuccessPopup(true);
    e.target.reset();
  };
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (!project) {
    return <div>No se pudo cargar el proyecto...</div>;
  }
  const relatedSquads = squads.filter(
    (squad) => squad.project.toString() === projectId,
  );
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
            {project.description}
          </p>
        </div>
        <div className='flex w-full flex-col gap-3 lg:w-1/3'>
          {relatedSquads.map((squad, index) => (
            <SquadCard key={squad._id} squad={squad} index={index}/>
          ))}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-4'>
        <div className='flex flex-col p-4 gap-2'>
          <h3 className='text-lg text-blue-600 font-bold'>Enviar mail a los mentores</h3>
          <form onSubmit={handleMailMent} className='flex flex-col gap-2'>

            <label htmlFor="mailSubjetM">Asunto:</label>
            <input
              type="text"
              id='mailSubjetM'
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailSubjectM}
              onChange={(e) => setMailSubjectM(e.target.value)}
            />

            <label htmlFor="bodyMailM">Cuerpo del mail:</label>
            <textarea
              name="bodyMailM"
              id="bodyMailM"
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailTextM}
              onChange={(e) => setMailTextM(e.target.value)}
            ></textarea>

            <button className='bg-blue-500 border-none rounded-xl' type='submit'>Enviar</button>

          </form>
        </div>
        <div className='flex flex-col p-4 gap-2'>
          <h3 className='text-lg text-blue-600 font-bold'>Enviar mail a los inscriptos</h3>
          <form onSubmit={handleMailSubs} className='flex flex-col gap-2'>
            <label htmlFor="mailSubjetS">Asunto:</label>
            <input
              type="text"
              id='mailSubjetS'
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailSubjectS}
              onChange={(e) => setMailSubjectS(e.target.value)}
            />
            <label htmlFor="bodyMailS">Cuerpo del mail:</label>
            <textarea
              name="bodyMailS"
              id="bodyMailS"
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailTextS}
              onChange={(e) => setMailTextS(e.target.value)}
            ></textarea>
            <button className='bg-blue-500 border-none rounded-xl' type='submit'>Enviar</button>
          </form>
        </div>
        <div className='flex flex-col p-4 gap-2'>
          <h3 className='text-lg text-blue-600 font-bold'>Enviar mail a todos</h3>
          <form onSubmit={handleMailAll} className='flex flex-col gap-2'>
            <label htmlFor="mailSubjet">Asunto:</label>
            <input
              type="text"
              id='mailSubjet'
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailSubject}
              onChange={(e) => setMailSubject(e.target.value)}
            />
            <label htmlFor="bodyMail">Cuerpo del mail:</label>
            <textarea
              name="bodyMail"
              id="bodyMail"
              className='m-2 rounded-xl border-0 bg-[#E7F0F8] p-2'
              value={mailText}
              onChange={(e) => setMailText(e.target.value)}
            ></textarea>
            <button className='bg-blue-500 border-none rounded-xl' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
      {showSuccessPopup && (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='rounded bg-white p-5 shadow-lg'>
            <h2 className='text-lg font-bold text-green-600'>
              Envío Exitoso
            </h2>
            <p>
              Tu mail se ha enviado con éxito.
            </p>
            <button
              className='mt-4 rounded bg-blue-500 px-4 py-2 text-white'
              onClick={() => setShowSuccessPopup(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export { DashProjectDetail };
