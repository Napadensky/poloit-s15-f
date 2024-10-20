import { useRoutes } from 'react-router-dom';
import { DashLayout } from './DashLayout';
import { DashHome } from './DashHome';
import { DashProjectDetail } from './dashProject/DashProjectDetail';
import { DashProjectNew } from './dashProject/DashProjectNew';
import { DashProjectEdit } from './dashProject/DashProjectEdit';
import { DashMentors } from '../dashMentors/DashMentors';
import { DashEnrolleds } from '../dashEnrolleds/DashEnrolleds';
import { SquadDetail } from '@/components/SquadDetail';

const DashRoutes = () => {
  const routes = useRoutes([
    {
      element: <DashLayout />,
      children: [
        { path: '', element: <DashHome />, index: true },
        { path: '/project/:projectId', element: <DashProjectDetail /> },
        { path: '/project/new', element: <DashProjectNew /> },
        { path: '/project/edit/:projectId', element: <DashProjectEdit /> },
        { path: '/mentors', element: <DashMentors /> },
        { path: '/enrolleds', element: <DashEnrolleds /> },
        { path: '/squadDetail/:squadId', element: <SquadDetail /> },
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
  ]);

  return routes;
};

export { DashRoutes };
