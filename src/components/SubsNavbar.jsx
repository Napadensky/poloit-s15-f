import { Link } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';
import userIcon from '../assets/Vector.svg';

const SubsNavbar = () => {
  return (
    <div className='m-1 flex items-center justify-between'>
      <div className='flex flex-1 justify-center xl:justify-start'>
        <Link to={'/'}>
          <img src={logo} alt='Logo PoloIT' className='hover:brightness-200' />
        </Link>
      </div>
      <div className='m-1 flex size-9 justify-center rounded-full border-solid border-black border-transparent bg-stone-200 p-1 xl:hidden'>
        <Link to={'/login'}>
          <img src={userIcon} alt='Icono usuario' />
        </Link>
      </div>
      <div className='m-1 flex justify-center p-1'>
        <Link to={'/login'}>
          <button className='m-1 rounded-xl bg-[#DD5A6B] px-10 py-5 text-white'>
            Iniciar sesión
          </button>
        </Link>
      </div>
    </div>
  );
};

export { SubsNavbar };
