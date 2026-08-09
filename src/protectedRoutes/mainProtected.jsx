import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const user = localStorage.getItem("loggedInUser");

  // Not logged in → don't allow /main
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default MainProtected;