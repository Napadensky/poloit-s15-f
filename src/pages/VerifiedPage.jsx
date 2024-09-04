const VerifiedPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          stroke='currentColor'
          className='size-28'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </div>
      <div>
        <p>Su correo se verificó correctamente. 
        En los siguientes días, vas a recibir la información correspondiente para participar del proyecto.</p>
      </div>
    </section>
  );
};

export { VerifiedPage }
