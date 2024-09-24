import { useNavigate } from 'react-router-dom';
import logo from '../../assets/polo-it 2.svg';
import { SubsInputField } from '@/components/SubsInputField';

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className='min-sceen flex w-full flex-col items-center justify-center rounded-xl bg-gray-100 px-4 md:m-auto md:max-w-96 md:border-2 md:border-blue-400 md:p-20'>
      <div className='mb-4 flex justify-center'>
        <img src={logo} alt='Logo PoloIT' className='hover:brightness-200' />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
          console.log({ e });
          console.log(e.target.username.value);
          console.log(e.target.password.value);
          navigate('/dashboard');
        }}
      >
        <SubsInputField
          placeholder={'usuario'}
          textLabel={'Usuario'}
          type={'text'}
          id={'username'}
        />
        <SubsInputField
          placeholder={'**********'}
          textLabel={'Contraseña'}
          type={'password'}
          id={'password'}
        />
        <button
          type='submit'
          className='focus:shadow-outline hover:bg-[#71AJD6]focus:outline-none w-full rounded-xl bg-[#2F68A1] px-4 py-2 font-bold text-white focus:bg-[#2F68A1]'
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};
