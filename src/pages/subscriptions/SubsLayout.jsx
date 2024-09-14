import { SubsNavbar } from "@/components/SubsNavbar";
import { Outlet } from "react-router-dom";

const SubsLayout = () => {
    return(
        <div className='flex h-screen flex-col'>
            <SubsNavbar />
            <main className='m-auto w-11/12 flex-1'>
                <Outlet />
            </main>
        </div>
    );
};

export {SubsLayout}