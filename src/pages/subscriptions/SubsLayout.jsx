import { SubsNavBar } from '@/components/SubsNavBar';
import { Outlet } from 'react-router-dom';

const SubsLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <SubsNavBar />
      <main className='m-auto w-11/12 flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export { SubsLayout };
