import { DashNavbar } from "@/components/DashNavBar";
import { Outlet } from "react-router-dom";


const DashLayout = () => {
    return(
        <>  
            <DashNavbar className='mb-0 w-auto'/>
            <div className='flex h-screen flex-row'>
                <div className='lg:w-2/12 hidden  bg-slate-600'>
                     <h1>SideBar</h1>  
                </div>                    
                <main className='m-auto lg:w-10/12'>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export {DashLayout}