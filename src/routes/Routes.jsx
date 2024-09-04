
import { LayoutAdmin } from "@/pages/admin/LayoutAdmin";
import { CurseDescription } from "@/pages/subscribe/CurseDescription";
import { LayoutGuest } from "@/pages/subscribe/LayoutGuest";
import { Route, Router, Routes } from "react-router-dom";

const MapRoutes = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index exact path=" " element={<LayoutGuest />} />
                        <Route index exact path="" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="course/:id" element={<CurseDescription />} />
                        <Route path="course/:id/subscribe" element={<Form />} />
                        <Route path="course/:id/subscribe/verified" element={<VerifiedPage />} />
                    </Route>
                    <Route path="/dashboard" element={<LayoutAdmin />} >
                        <Route exact path=" " element={<HomeAdmin />} />
                        <Route path="course/:id" element={<CurseDescription />} />
                        <Route path="course/edit" element={<CurseDescription />} />
                        <Route path="course/edit/:id" element={<CurseDescription />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};
export {MapRoutes}