const Card = () => {
  return (
    <>
      <div className='flex h-[136px] w-[324px] overflow-hidden rounded-lg shadow-lg'>
        <div className='h-full w-1/3 flex-shrink-0'>
          <img
            src='https://via.placeholder.com/108x136'
            alt='Imagen del curso'
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex w-2/3 flex-col p-2'>
          <p className='text-sm'>Modalidad del Curso</p>
          <h3 className='mb-1 text-lg font-semibold'>Título del Curso</h3>
          <p className='text-sm'> 40 horas</p>

          <button className='ml-auto mt-auto max-w-[390px] rounded bg-gray-600 px-2 py-1 text-xs text-white hover:bg-gray-700 focus:outline-none'>
            + Info
          </button>

          <div className='mt-2 hidden'>
            <p className='text-sm'>Descripción detallada del curso.</p>
            <p className='text-sm'>
              <strong>Mentor:</strong> Nombre del Mentor
            </p>
            <p className='text-sm'>
              <strong>Plataforma:</strong> Plataforma del Curso
            </p>
            <p className='text-sm'>
              <strong>Precio:</strong> $200
            </p>
            <p className='text-sm'>
              <strong>Fechas:</strong> 01/09/2024 - 01/12/2024
            </p>
            <p className='text-sm'>
              <strong>Días:</strong> Lunes, Miércoles, Viernes
            </p>
            <p className='text-sm'>
              <strong>Horario:</strong> 18:00 - 21:00
            </p>
            <p className='text-sm'>
              <strong>Máx. Estudiantes:</strong> 20
            </p>
            <p className='text-sm'>
              <strong>Estado:</strong> Activo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
