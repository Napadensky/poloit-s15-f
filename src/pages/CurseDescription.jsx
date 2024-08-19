import '../styles/App.css';

const CurseDescription = () => {
  return (
    <div className='w-screen h-screen bg-white'>
    
      <nav className="w-screen mt-4 flex justify-start items-center h-auto bg-white text-black relative shadow-sm border-y-2 border-black py-4">
        <a href="/" className="text-center text-2xl text-gray-800 ml-8 font-extrabold bg-gray-200 px-10 py-1 hover:text-gray-800">polo it</a>
      </nav>

      <main className='w-full p-10 flex flex-col justify-center md:flex-row'>
        <div className='w-full md:w-2/5 md:h-60 mx-auto bg-gray-200'>
          <img className='object-cover' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg" alt="Imagen sin fondo" />
        </div>

        <div className='md:w-3/5 md:px-10'>
          <h2 className='font-bold text-lg sm:text-xl text-gray-900 text-start mt-8 md:mt-0'>NOMBRE DEL PROYECTO</h2>
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 text-start mt-6">ORGANIZADOR</h3>
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 text-start mt-6">DURACIÓN</h3>
          <p className="font-normal text-sm sm:text-lg text-gray-900 text-start mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta iste repellat eum sequi officia expedita unde aperiam voluptatum! Quis assumenda cupiditate voluptatem, excepturi voluptas accusamus atque perferendis architecto. Dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium commodi illum quasi voluptas numquam, cum, adipisci reprehenderit neque enim eveniet fugit, molestias blanditiis laudantium iusto aliquam optio ut aperiam!</p>

          <button className='rounded-none border-gray-600 text-lg	bg-gray-300 text-gray-600 mt-8 py-3 hover:bg-gray-200 hover:border-gray-200 focus:outline-none'>Inscribirme ahora</button>
        </div>

      </main>
    </div>
  );
};

export default CurseDescription;