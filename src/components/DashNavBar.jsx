import { Link } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';

const DashNavbar = (props) => {
  const { setIsSidebarVisible } = props;
  return (
    <div className='m-1 flex items-center lg:justify-between'>
      <div className='flex flex-1 justify-start xl:justify-start'>
        <button
          onClick={() => setIsSidebarVisible((value) => !value)}
          className='mr-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
          </svg>
        </button>
        <Link to={'/'}>
          <img src={logo} alt='Logo PoloIT' className='hover:brightness-200' />
        </Link>
      </div>

      <div className='m-1 hidden justify-center p-1 lg:flex'>
        <Link to={'/login'}>
          <button className='m-1 h-12 w-48 rounded-xl bg-[#DD5A6B] text-white'>
            Iniciar sesión
          </button>
        </Link>
      </div>
    </div>
  );
};

export { DashNavbar };
