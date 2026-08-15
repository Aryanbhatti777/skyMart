
import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router";
import Loader from "../shared/Loader";

const PublicProtected = () => {
  const user = useSelector(state => state.auth.user);
  if (user) {
    <Loader/>
    return <Navigate to="/main" replace/>
  }

  return <Outlet />;
};

export default PublicProtected;