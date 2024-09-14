import logo from '../assets/polo-it 2.svg';
import userIcon from '../assets/Vector.svg';

const SubsNavbar = () => {
  return (
    <div className='flex justify-between items-center m-1'>
      <div className='flex-1 flex justify-center'>
        <img src={logo} alt='Logo PoloIT' />
      </div>
      <div className='flex  justify-center m-1 p-1 border-solid	rounded-full border-black	border-transparent	bg-stone-200	size-9		'>
        <img  src={userIcon} alt='Icono usuario' />
      </div>
    </div>
  );
};

export { SubsNavbar };
