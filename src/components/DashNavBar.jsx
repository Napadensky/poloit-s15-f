import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Bars3Icon } from '@heroicons/react/24/outline';

export const DashNavBar = (props) => {
  const { toggleSideBar } = props;
  const token = localStorage.getItem('token');
  const navigation = useNavigate();

  useEffect(() => {
    try {
      jwtDecode(token);
    } catch (error) {
      navigation('/login');
      console.error(error.message);
    }
  }, [token, navigation]);

  return (
    <div className='m-1 flex items-center lg:justify-between'>
      <div className='flex flex-1 items-center justify-start xl:justify-start'>
        <Bars3Icon
          onClick={() => toggleSideBar((value) => !value)}
          className='m-4 size-6 cursor-pointer'
        />
        <Link to={'/'}>
          <img src={logo} alt='Logo PoloIT' />
        </Link>
      </div>

      <div className='m-1 hidden justify-center p-1 lg:flex'>
        <Link to={'/'}>
          <button className='m-1 h-9 w-48 rounded-xl bg-[#DD5A6B] text-white'>
            Home
          </button>
        </Link>
        <Link to={'/'}>
          <button
            className='m-1 h-9 w-48 rounded-xl bg-[#DD5A6B] text-white'
            onClick={() => localStorage.removeItem('token')}
          >
            Cerrar sesión
          </button>
        </Link>
      </div>
    </div>
  );
};
