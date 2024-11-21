import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import ModuleRouter from "../ModuleRouter.jsx";
import ModulesProvider from "../lib/context/modules.context.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/1'} replace />
  },
  {
    path: '/:moduleNumber',
    element: (
      <ModulesProvider>
        <ModuleRouter />
      </ModulesProvider>
    )
  },
]);

export default () => <RouterProvider router={router} />;