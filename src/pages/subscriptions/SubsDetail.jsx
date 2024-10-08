const SubsDetail = () => {
  return (
    <div>
      <main className='flex w-full flex-col justify-center p-10'>
        <div className='mx-auto w-full'>
          <img
            className='object-cover'
            src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
            alt='Imagen sin fondo'
          />
        </div>

        <h2 className='mt-8 text-start text-lg font-bold'>
          NOMBRE DEL PROYECTO
        </h2>
        <h3 className='mt-6 text-start text-lg font-bold'>ORGANIZADOR</h3>
        <h3 className='mt-6 text-start text-lg font-bold'>DURACIÓN</h3>
        <p className='mt-6 text-start text-sm font-normal'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta
          iste repellat eum sequi officia expedita unde aperiam voluptatum! Quis
          assumenda cupiditate voluptatem, excepturi voluptas accusamus atque
          perferendis architecto. Dolor? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A accusantium commodi illum quasi voluptas numquam,
          cum, adipisci reprehenderit neque enim eveniet fugit, molestias
          blanditiis laudantium iusto aliquam optio ut aperiam!
        </p>

        <button className='mt-8 rounded-none border-gray-600 bg-gray-300 px-2 py-3 text-lg focus:outline-none'>
          Inscribirme ahora
        </button>
      </main>
    </div>
  );
};

export { SubsDetail };
