import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"} replace></Navigate>;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
