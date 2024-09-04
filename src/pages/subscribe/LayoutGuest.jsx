import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutGuest = () => {
    return(
        <div>
            <Navbar />
            <Outlet className="flex-1"/>
        </div>
    );
};

export {LayoutGuest}