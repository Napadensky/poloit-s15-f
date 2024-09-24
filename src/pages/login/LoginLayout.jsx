import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <main className='flex h-screen items-center'>
      <Outlet />
    </main>
  );
};

export { LoginLayout };
