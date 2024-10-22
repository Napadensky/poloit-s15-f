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
        <p>Nombre: {squad.mentor.name}</p>
        <p>Correo: {squad.mentor.mail}</p>
      </div>
      <div>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>
          Integrantes del Squad
        </h3>
        <ul className='flex flex-col gap-5'>
          <li>
            <span className='font-bold'>UX/UI: </span>
            {squad.uxui.map((e) => {
              return (
                <div className='' key={e._id}>
                  <p>Nombre : {e.name}</p>
                  <p>Correo : {e.mail}</p>
                  <p>Celular : {e.phone}</p> <br></br>
                </div>
              );
            })}
          </li>
          <li>
            <span className='font-bold'>Frontend: </span>
            {squad.frontends.map((e) => {
              return (
                <div className='' key={e._id}>
                  <p>Nombre : {e.name}</p>
                  <p>Correo : {e.mail}</p>
                  <p>Celular : {e.phone}</p> <br></br>
                </div>
              );
            })}
          </li>
          <li>
            <span className='font-bold'>Backend: </span>
            {squad.backends.map((e) => {
              return (
                <div className='' key={e._id}>
                  <p>Nombre : {e.name}</p>
                  <p>Correo : {e.mail}</p>
                  <p>Celular : {e.phone}</p> <br></br>
                </div>
              );
            })}
          </li>
          <li>
            <span className='font-bold'>Testing QA: </span>
            {squad.qa.map((e) => {
              return (
                <div className='' key={e._id}>
                  <p>Nombre : {e.name}</p>
                  <p>Correo : {e.mail}</p>
                  <p>Celular : {e.phone}</p> <br></br>
                </div>
              );
            })}
          </li>
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
