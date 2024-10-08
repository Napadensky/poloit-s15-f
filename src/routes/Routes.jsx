import { DashRoutes } from '@/pages/dashboard/DashRoutes';
import { LoginRoutes } from '@/pages/login/LoginRoutes';
import { SubsRoutes } from '@/pages/subscriptions/SubsRoutes';
import { Route, Routes } from 'react-router-dom';

const MapRoutes = () => {
  return (
    <Routes>
      <Route path='/*' index={true} element={<SubsRoutes />} />
      <Route path='/dashboard/*' element={<DashRoutes />} />
      <Route path='/login/*' index={true} element={<LoginRoutes />} />
    </Routes>
  );
};
export { MapRoutes };
