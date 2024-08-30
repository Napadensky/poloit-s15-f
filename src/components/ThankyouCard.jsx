const ThankyouCard = () => {
  const openEmail = () => {
    window.open('https://mail.google.com', '_blank');
  };
  return (
    <div className='mx-auto rounded-lg bg-gray-300 shadow-lg'>
      <div className='p-6'>
        <h2 className='text-2xl font-bold text-gray-800'>
          ¡Gracias por tu interés en el proyecto!
        </h2>
        <p className='mt-4 text-gray-600'>
          Por favor revisa tu correo electrónico para continuar.
        </p>
        <div className='flex justify-center'>
          <button
            className='mt-6 border border-white bg-white px-4 py-2 text-black hover:bg-gray-100'
            onClick={openEmail}
          >
            Abrir correo
          </button>
        </div>
      </div>
    </div>
  );
};

export { ThankyouCard };