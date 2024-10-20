import { getSquadById } from '@/services/squadService';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const SquadDetail = () => {
  const [squad, setSquad] = useState(null);
  const { squadId } = useParams();
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
    if (squadId) {
      fetchSquad();
    }
  }, [squadId]);
  if (!squad) {
    return <div>No se encontraron squads...</div>;
  }
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='m-4 rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Squad</h2>
      <div className='mb-6'>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>Mentor</h3>
        <p>{squad.mentor}</p>
      </div>
      <div>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>
          Integrantes del Squad
        </h3>
        <ul className='flex flex-col gap-5'>
          <li>UX/UI: {squad.uxui[0]}</li>
          {squad.uxui.length > 1 && <li>UX/UI: {squad.uxui[1]}</li>}

          <li>Frontend: {squad.frontends[0]}</li>
          {squad.frontends.length > 1 && (
            <li>Frontend: {squad.frontends[1]}</li>
          )}

          <li>Backend: {squad.backends[0]}</li>
          {squad.backends.length > 1 && <li>Backend: {squad.backends[1]}</li>}

          <li>Testing QA: {squad.qa[0]}</li>
          {squad.qa.length > 1 && <li>Testing QA: {squad.qa[1]}</li>}
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
