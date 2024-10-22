import { useMentor } from '@/hooks/useMentor';

export const DashMentors = () => {
  const { data } = useMentor();
  const mentors = data;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-center text-3xl font-bold text-gray-800'>
        Lista de Mentores
      </h1>
      <div className='overflow-x-auto rounded-lg bg-white shadow-md'>
        <table className='min-w-full leading-normal'>
          <thead>
            <tr className='bg-gray-200 text-sm uppercase leading-normal text-gray-600'>
              <th className='px-6 py-3 text-left'>Nombre Completo</th>
              <th className='px-6 py-3 text-left'>Teléfono</th>
              <th className='px-6 py-3 text-left'>Correo Electrónico</th>
              <th className='px-6 py-3 text-left'>Empresa</th>
              <th className='px-6 py-3 text-left'>Rol de Mentor</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light text-gray-600'>
            {mentors.map((mentor) => (
              <tr
                key={mentor._id}
                className='border-b border-gray-200 hover:bg-gray-100'
              >
                <td className='whitespace-nowrap px-6 py-3 text-left'>
                  <div className='flex items-center'>{mentor.name}</div>
                </td>

                <td className='px-6 py-3 text-left'>{mentor.phone}</td>
                <td className='px-6 py-3 text-left'>{mentor.mail}</td>
                <td className='px-6 py-3 text-left'>{mentor.ong}</td>
                <td className='px-6 py-3 text-left'>{mentor.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
