import { getSquadById } from '@/services/squadService';
import React, { useState, useEffect } from 'react';

export const SquadDetail = () => {
  const [squad, setSquad] = useState(null);
  useEffect(() => {
    const fetchSquad = async () => {
      try {
        const squadData = await getSquadById(squadId);
        setSquad(squadData);
      } catch (error) {
        console.error('error cargando squads', error);
      }
    };
  });
  return (
    <div className='m-4 rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Squad</h2>

      <div className='mb-6'>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>Títulos</h3>
      </div>

      <div className='mb-6'>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>Mentor</h3>
      </div>
      <div>
        <h3 className='mb-2 text-xl font-semibold text-gray-700'>
          Integrantes del Squad
        </h3>
      </div>
    </div>
  );
};
