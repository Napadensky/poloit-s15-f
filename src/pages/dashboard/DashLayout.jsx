import { DashNavBar } from '@/components/DashNavBar';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashLayout = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  return (
    <div className='flex h-screen flex-col'>
      <DashNavBar toggleSideBar={setIsSideBarVisible} />
      <div className='flex flex-1 overflow-hidden'>
        <aside
          className={`h-full w-64 border border-black bg-gray-100 p-4 transition-all duration-300 ease-in-out ${isSideBarVisible ? 'absolute translate-x-0' : '-translate-x-full'}`}
        >
          {/* Contenido del sidebar */}
          <h2 className='mb-4 text-xl font-bold'>Sidebar</h2>
          {/* Agrega aquí los elementos del sidebar */}
          <nav className='flex flex-col space-y-2'>
            <Link to='/dashboard' className='rounded p-2 hover:bg-gray-200'>
              Proyectos
            </Link>
            <Link to='mentors' className='rounded p-2 hover:bg-gray-200'>
              Mentores
            </Link>
            <Link to='enrolleds' className='rounded p-2 hover:bg-gray-200'>
              Egresados
            </Link>
          </nav>
        </aside>
        <main
          className={`flex flex-1 flex-col overflow-auto border border-black p-4 transition-all duration-300 ease-in-out lg:p-8 ${isSideBarVisible ? 'w-full' : '-ml-64 w-full'} `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { DashLayout };
