
import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router";

const PublicProtected = () => {
  const user = useSelector(state => state.auth.user);
  if (user) {
    return <Navigate to="/main" replace/>
  }

  return <Outlet />;
};

export default PublicProtected;