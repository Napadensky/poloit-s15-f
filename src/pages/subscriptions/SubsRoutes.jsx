import { useRoutes } from 'react-router-dom';
import { SubsLayout } from './SubsLayout';
import { SubsHome } from './SubsHome';
import { SubsDetail } from './SubsDetail';
import { SubsForm } from './SubsForm';

const SubsRoutes = () => {
    const routes = useRoutes([
      {
        element: <SubsLayout />,
        children: [
          {
            path: '',
            element: <SubsHome />,
            index: true,
            errorElement: <h1>Not Found</h1>,
          },
          { path: 'SubsDetail/:id', element: <SubsDetail /> },
          { path: 'SubsDetail/', element: <SubsDetail /> },
          { path: 'SubsForm/:id', element: <SubsForm /> },
          { path: '*', element: <h1>Not Found</h1> },
        ],
      },
    ]);
  
    return routes;
  };

  export {SubsRoutes}