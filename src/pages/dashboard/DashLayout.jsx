import { SubsNavbar } from "@/components/SubsNavbar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return(
        <div className='flex h-screen flex-row'>
            <SubsNavbar className='mb-0 w-auto'/>
            <main className='m-auto w-11/12'>
                <Outlet />
            </main>
        </div>
    );
};

export {DashLayout}