
import { LayoutAdmin } from "@/pages/admin/LayoutAdmin";
import { Home } from "@/pages/Home";
import { CurseDescription } from "@/pages/subscribe/CurseDescription";
import { LayoutGuest } from "@/pages/subscribe/LayoutGuest";
import { VerifiedPage } from "@/pages/VerifiedPage";
import { Route, Routes } from "react-router-dom";

const MapRoutes = () => {
    return(
        <>
          
                <Routes>
                    <Route path="/" element={<LayoutGuest />} >
                        <Route index exact path="" element={<Home />} />
                        <Route path="login" element={<h1>pantalla login</h1>} />
                        <Route path="course/:id" element={<CurseDescription />} />
                        <Route path="course/:id/subscribe" element={<h1>pantalla formulario</h1>} />
                        <Route path="course/:id/subscribe/verified" element={<VerifiedPage />} />
                    </Route>
                    <Route path="/dashboard" element={<LayoutAdmin />} >
                        <Route exact path=" " element={<h1>home admin</h1>} />
                        <Route path="course/:id" element={<CurseDescription />} />
                        <Route path="course/edit" element={<CurseDescription />} />
                        <Route path="course/edit/:id" element={<CurseDescription />} />
                    </Route>
                </Routes>
           
        </>
    );
};
export {MapRoutes}