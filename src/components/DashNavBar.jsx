import { Link } from "react-router-dom";
import logo from '../assets/polo-it 2.svg';

const DashNavbar = () => {
    return (
      <div className='flex lg:justify-between items-center m-1'>
        <div className='flex-1 flex justify-start xl:justify-start'>
          <Link to={'/'}>
            <img 
              src={logo} 
              alt='Logo PoloIT'
              className='hover:brightness-200' 
            />
          </Link>
        </div>
    
        <div className='lg:flex justify-center m-1 p-1 hidden'>
          <Link to={'/login'}>
            <button className='bg-[#DD5A6B] text-white  m-1 w-48 h-12 rounded-xl'>
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export { DashNavbar };
