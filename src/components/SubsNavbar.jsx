import { Link } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';

export const SubsNavBar = () => {
  const token = localStorage.getItem('token');
  return (
    <div className='m-1 flex items-center justify-between'>
      <div className='flex flex-1 justify-center lg:ml-40'>
        <Link to={'/'}>
          <img src={logo} alt='Logo PoloIT' className='hover:brightness-200' />
        </Link>
      </div>

      <div className='m-1 flex justify-center p-1'>
        <Link to={'/login'}>
          <button className='m-1 h-9 w-48 rounded-xl bg-[#DD5A6B] text-white'>
            {token ? 'Panel' : 'Iniciar sesión'}
          </button>
        </Link>
      </div>
    </div>
  );
};
