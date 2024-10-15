import React from 'react';
import { useMentor } from '@/hooks/useMentor';

export const DashMentors = () => {
  const mentors = [
    {
      id: 1,
      fullName: 'Ana García',
      phone: '+34 123 456 789',
      email: 'ana.garcia@ejemplo.com',
      company: 'Prisma',
      mentorRole: 'QA',
      squadNumber: 1,
    },
    {
      id: 2,
      fullName: 'Carlos Rodríguez',
      phone: '+34 987 654 321',
      email: 'carlos.rodriguez@ejemplo.com',
      company: 'Gire',
      mentorRole: 'UXUI',
      squadNumber: 2,
    },
    {
      id: 3,
      fullName: 'Elena Martínez',
      phone: '+34 456 789 123',
      email: 'elena.martinez@ejemplo.com',
      company: 'Epidata',
      mentorRole: 'Fullstack',
      squadNumber: 3,
    },
    {
      id: 4,
      fullName: 'David López',
      phone: '+34 789 123 456',
      email: 'david.lopez@ejemplo.com',
      company: 'Globant',
      mentorRole: 'Fullstack',
      squadNumber: 1,
    },
  ];

  return (
    <div>
      <h1>Lista de Mentores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Empresa</th>
            <th>Rol de Mentor</th>
            <th>Número de Squad</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.fullName}</td>
              <td>{mentor.phone}</td>
              <td>{mentor.email}</td>
              <td>{mentor.company}</td>
              <td>{mentor.mentorRole}</td>
              <td>{mentor.squadNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
