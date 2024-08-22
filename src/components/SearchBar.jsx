const SearchBar = () => {
  return (
    <div className="flex items-center justify-evenly my-4">
      <input className="w-52 h-10 p-2 border border-current	focus:border-current" type='text' placeholder='Buscar en polo it...' />
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-8 hover:cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </button>
    </div>
  );
};

export { SearchBar };
