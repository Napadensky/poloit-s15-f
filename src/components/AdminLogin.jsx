import { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == '' || password == '') {
      setError(true);
      return;
    }
  };
  return (
    <>
      <div className='text-2x1 mt-10 text-center font-bold leading-9 tracking-tight text-gray-900'>
        Logo
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Usuario
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'></div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Contraseña
            </label>
            <div className='mt-2'>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Iniciar sesion
          </button>
        </form>
      </div>
    </>
  );
};

export { AdminLogin };
