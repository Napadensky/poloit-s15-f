import { useRoutes } from 'react-router-dom';
import { DashLayout } from './DashLayout';
import { DashHome } from './DashHome';

const DashRoutes = () => {
  const routes = useRoutes([
    {
      element: <DashLayout />,
      children: [
        { path: '', element: <DashHome />, index: true },
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
  ]);

  return routes;
};

export {DashRoutes}