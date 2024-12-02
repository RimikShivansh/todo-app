import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Todo from "./pages/Todo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute component={Login} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <AuthRoute component={Register} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo",
    element: <AuthRoute component={Todo} protectedRoute={true} />,
    errorElement: <ErrorPage />,
  },
  { path: "*", element: <NotFound />, errorElement: <ErrorPage /> },
]);

export default routes;
