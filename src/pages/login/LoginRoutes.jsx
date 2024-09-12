import { useRoutes } from 'react-router-dom';
import { LoginLayout } from './LoginLayout';
import { LoginForm } from './LoginForm';

const LoginRoutes = () => {
  const routes = useRoutes([
    {
      element: <LoginLayout />,
      children: [{ path: '', element: <LoginForm />, index: true }],
    },
  ]);

  return routes;
};

export {LoginRoutes}