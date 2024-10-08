import { DashNavbar } from '@/components/DashNavBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const DashLayout = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  return (
    <div className='flex h-screen flex-col'>
      <DashNavbar className='' toggleSideBar={setIsSideBarVisible} />
      <div className='flex flex-1 overflow-hidden'>
        <aside
          className={`w-64 border border-black bg-gray-100 p-4 transition-all duration-300 ease-in-out ${isSideBarVisible ? 'translate-x-0' : '-translate-x-full'} `}
        >
          {/* Contenido del sidebar */}
          <h2 className='mb-4 text-xl font-bold'>Sidebar</h2>
          {/* Agrega aquí los elementos del sidebar */}
        </aside>
        <main
          className={`flex-1 overflow-auto border border-black p-4 transition-all duration-300 ease-in-out lg:p-8 ${isSideBarVisible ? 'w-full' : 'ml-[-16rem] w-full'} `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { DashLayout };
