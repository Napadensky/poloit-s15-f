import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const DashNavBar = (props) => {
  const { toggleSideBar } = props;
  const token =localStorage.getItem('token');
  const navigation = useNavigate();

  useEffect(()=> {
    try {
      jwtDecode(token);
    } catch(error) {
      navigation('/login');
      console.error(error.message);
    }
  }, [token,navigation]);
   

  return (
    <div className='m-1 flex items-center lg:justify-between'>
      <div className='flex flex-1 justify-start xl:justify-start'>
        <button
          onClick={() => toggleSideBar((value) => !value)}
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
          onClick={() => localStorage.removeItem('token')} 
          className='m-1 h-12 w-48 rounded-xl bg-[#DD5A6B] text-white'>
            Cerrar sesión
          </button>
        </Link>
      </div>
    </div>
  );
};


