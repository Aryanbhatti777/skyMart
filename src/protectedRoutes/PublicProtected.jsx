import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;