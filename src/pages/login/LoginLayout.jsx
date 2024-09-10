import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <main className='grid h-screen w-screen place-content-center'>
      <Outlet />
    </main>
  );
};

export {LoginLayout}