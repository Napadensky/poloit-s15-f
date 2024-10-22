import { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { useLogin } from '../../hooks/useLogin';
import { SubsInputField } from '@/components/SubsInputField';
import logo from '../../assets/polo-it 2.svg';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loading, error, user, token } = useLogin();
  const [localToken, setLocalToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = e.target.username.value;
    const pass = e.target.password.value;

    if (!mail || !pass) {
      alert('Correo y contraseña son requeridos');
      return;
    }

    await login(mail, pass);
  };

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token');
    if (tokenFromLocalStorage) {
      try {
        const decodedToken = jwtDecode(tokenFromLocalStorage); 
        setLocalToken(tokenFromLocalStorage);
        navigate('/dashboard');
      } catch (err) {
        console.error('Token inválido', err);
        localStorage.removeItem('token');
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (token) {
      setLocalToken(token);
      navigate('/dashboard');
    }
  }, [token, navigate]);

  return (
    <div className='min-sceen flex w-full flex-col items-center justify-center rounded-xl bg-gray-100 px-4 md:m-auto md:max-w-96 md:border-2 md:border-blue-400 md:p-20'>
      <div className='mb-4 flex justify-center'>
        <img src={logo} alt='Logo PoloIT' className='hover:brightness-200' />
      </div>
      <form onSubmit={handleSubmit}>
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
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
      <div className='mt-4 w-full text-center'>
        <Link
          to='/forgot-password'
          className='text-sm text-[#2F68A1] hover:underline'
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
};
