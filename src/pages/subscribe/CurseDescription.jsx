const CurseDescription = () => {
  return (
    <div>
      <main className='w-full p-10 flex flex-col justify-center'>
        <div className='w-full mx-auto'>
          <img className='object-cover' src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg' alt='Imagen sin fondo' />
        </div>

        <h2 className='font-bold text-lg text-start mt-8'>NOMBRE DEL PROYECTO</h2>
        <h3 className='font-bold text-lg text-start mt-6'>ORGANIZADOR</h3>
        <h3 className='font-bold text-lg text-start mt-6'>DURACIÓN</h3>
        <p className='font-normal text-sm text-start mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta iste repellat eum sequi officia expedita unde aperiam voluptatum! Quis assumenda cupiditate voluptatem, excepturi voluptas accusamus atque perferendis architecto. Dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium commodi illum quasi voluptas numquam, cum, adipisci reprehenderit neque enim eveniet fugit, molestias blanditiis laudantium iusto aliquam optio ut aperiam!</p>

        <button className='rounded-none border-gray-600 text-lg	bg-gray-300 mt-8 py-3 px-2 focus:outline-none'>Inscribirme ahora</button>
      </main>
    </div>
  );
};

export { CurseDescription };