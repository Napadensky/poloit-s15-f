import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return(
        <div className='flex h-screen flex-row'>
            <Navbar className='mb-0 w-auto'/>
            <main className='m-auto w-11/12'>
                <Outlet />
            </main>
        </div>
    );
};

export {DashLayout}