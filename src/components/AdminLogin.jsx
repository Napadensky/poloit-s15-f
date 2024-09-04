import { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == '' || password == '') {
      // setError(true);
      return;
    }
  };
  return (
    <div className='p-4 shadow-lg'>
      <h3 className='text-2x1 text-center font-bold leading-9'>Logo</h3>
      <form onSubmit={handleSubmit} >
        <div className='mb-4 flex flex-col items-start'>
          <label
            htmlFor='username'
            className='mb-3  text-sm font-medium leading-6'
          >
            Usuario
          </label>
          <div className='mt-2 w-full'>
            <input
              className='w-full rounded-md bg-gray-200 px-4 py-2'
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-4 flex flex-col items-start'>
          
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Contraseña
          </label>
          <div className='mt-2 w-full'>
            <input
              className='w-full rounded-md bg-gray-200 px-4 py-2'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='mt-4 rounded-md bg-gray-400 px-4 py-2'>
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};

export { AdminLogin };
