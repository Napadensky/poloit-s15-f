import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return(
        <div>
            <Navbar />
            <Outlet className="flex-1"/>
        </div>
    );
};

export {LayoutAdmin}