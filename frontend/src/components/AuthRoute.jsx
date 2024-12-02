import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userInfo } from "../store/slices/userSlice";

const AuthRoute = ({ component: Component, protectedRoute = false }) => {
  const user = useSelector(userInfo);

  // For protected routes (e.g. /todo)
  if (protectedRoute) {
    if (user) {
      return <Component />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    if (user) {
      return <Navigate to="/todo" />;
    } else {
      return <Component />;
    }
  }
};

export default AuthRoute;
