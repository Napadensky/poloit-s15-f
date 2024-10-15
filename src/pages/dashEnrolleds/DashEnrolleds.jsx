import React from 'react';
import { useEnroll } from '@/hooks/useEnroll';

export const DashEnrolleds = () => {
  const enrolleds = [
    {
      id: 1,
      fullName: 'Ana García',
      phone: '+34 123 456 789',
      email: 'ana.garcia@ejemplo.com',
      ong: 'TalentoTech',
      rol: 'QA',
      squadNumber: 1,
    },
    {
      id: 2,
      fullName: 'Carlos Rodríguez',
      phone: '+34 987 654 321',
      email: 'carlos.rodriguez@ejemplo.com',
      ong: 'SilverTech',
      role: 'UXUI',
      squadNumber: 2,
    },
    {
      id: 3,
      fullName: 'Elena Martínez',
      phone: '+34 456 789 123',
      email: 'elena.martinez@ejemplo.com',
      ong: 'Empujar',
      role: 'Fullstack',
      squadNumber: 3,
    },
    {
      id: 4,
      fullName: 'David López',
      phone: '+34 789 123 456',
      email: 'david.lopez@ejemplo.com',
      ong: 'Forge',
      role: 'Fullstack',
      squadNumber: 4,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-center text-3xl font-bold text-gray-800'>
        Lista de Egresados
      </h1>
      <div className='overflow-x-auto rounded-lg bg-white shadow-md'>
        <table className='min-w-full leading-normal'>
          <thead>
            <tr className='bg-gray-200 text-sm uppercase leading-normal text-gray-600'>
              <th className='px-6 py-3 text-left'>Nombre Completo</th>
              <th className='px-6 py-3 text-left'>Teléfono</th>
              <th className='px-6 py-3 text-left'>Correo Electrónico</th>
              <th className='px-6 py-3 text-left'>ONG</th>
              <th className='px-6 py-3 text-left'>Rol de Egresado</th>
              <th className='px-6 py-3 text-center'>Número de Squad</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light text-gray-600'>
            {enrolleds.map((enroll) => (
              <tr
                key={enroll.id}
                className='border-b border-gray-200 hover:bg-gray-100'
              >
                <td className='whitespace-nowrap px-6 py-3 text-left'>
                  <div className='flex items-center'>{enroll.fullName}</div>
                </td>

                <td className='px-6 py-3 text-left'>{enroll.phone}</td>
                <td className='px-6 py-3 text-left'>{enroll.email}</td>
                <td className='px-6 py-3 text-left'>{enroll.ong}</td>
                <td className='px-6 py-3 text-left'>{enroll.role}</td>
                <td className='px-6 py-3 text-center'>{enroll.squadNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
