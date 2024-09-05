
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <Outlet className="flex-1"/>
        </div>
    );
};

export {Layout}