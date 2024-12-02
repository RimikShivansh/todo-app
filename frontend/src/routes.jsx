import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Todo from "./pages/Todo";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/todo", element: <Todo /> },
  { path: "*", element: <NotFound /> },
]);

export default routes;
