import { getMentor } from '@/services/mentorServices';
import { getSquadById } from '@/services/squadService';
import { getEnrolled } from '@/services/subscriptionServices';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const SquadDetail = () => {
  const [squad, setSquad] = useState(null);
  const { squadId } = useParams();
  const [enrolled, setEnrolled] = useState([]);
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSquad = async () => {
      try {
        const squadData = await getSquadById(squadId);
        setSquad(squadData);
      } catch (error) {
        console.error('Error cargando squad:', error);
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
    if (squadId) {
      fetchSquad();
      fetchEnrolled();
    fetchMentor();
    }
  }, [squadId]);
  if (!squad) {
    return <div>No se encontraron squads...</div>;
  }
  const handleBack = () => {
    navigate(-1);
  };
  
  const nameM = () => {
    const mentor = mentors.find(mentor => mentor._id === squad.mentor);
    if (mentor) {
      return mentor.name; 
    }
    return null; 
  }
  const nameU = ()=>{
    const uxui = enrolled.filter(enrolled => squad.uxui.includes(enrolled._id)).map(enrolled => enrolled.name);    
    return uxui.join(', ');
  }
  const nameF = ()=>{
    const front = enrolled.filter(enrolled => squad.frontends.includes(enrolled._id)).map(enrolled => enrolled.name);    
    return front.join(', ');
  }
  const nameB = ()=>{
    const back = enrolled.filter(enrolled => squad.backends.includes(enrolled._id)).map(enrolled => enrolled.name);    
    return back.join(', ');
  }
  const nameQ = ()=>{
    const testing = enrolled.filter(enrolled => squad.qa.includes(enrolled._id)).map(enrolled => enrolled.name);    
    return testing.join(', ');
  }
  return (
    <div className='m-4 rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Squad</h2>
      <div className='mb-6'>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>Mentor</h3>
        <p>{nameM()}</p>
      </div>
      <div>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>
          Integrantes del Squad
        </h3>
        <ul className='flex flex-col gap-5'>
          <li>UX/UI: {nameU()}</li>          
          <li>Frontend: {nameF()}</li>
          <li>Backend: {nameB()}</li>
          <li>Testing QA: {nameQ()}</li>
        </ul>
      </div>
      <button
        className='m-4 h-9 w-48 rounded-xl bg-[#DD5A6B] text-white'
        onClick={handleBack}
      >
        Volver
      </button>
    </div>
  );
};
