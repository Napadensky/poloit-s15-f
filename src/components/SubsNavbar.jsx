import { Link } from 'react-router-dom';
import logo from '../assets/polo-it 2.svg';
import userIcon from '../assets/Vector.svg';

const SubsNavbar = () => {
  return (
    <div className='flex justify-between items-center m-1'>
      <div className='flex-1 flex justify-center xl:justify-start'>
        <Link to={'/'}>
          <img 
            src={logo} 
            alt='Logo PoloIT'
            className='hover:brightness-200' 
          />
        </Link>
      </div>
      <div className='flex  justify-center m-1 p-1 border-solid	rounded-full border-black	border-transparent	bg-stone-200	size-9	xl:hidden	'>
        <Link to={'/login'}>
          <img  
            src={userIcon} 
            alt='Icono usuario'
          />
        </Link>
      </div>
      <div className='flex justify-center m-1 p-1 '>
        <Link to={'/login'}>
          <button className='bg-[#DD5A6B] text-white py-5 m-1 px-10 rounded-xl'>
            Iniciar sesión
          </button>
        </Link>
      </div>
    </div>
  );
};

export { SubsNavbar };