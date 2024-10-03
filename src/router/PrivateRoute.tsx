import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // const authStore = useAuthStore();
  // return authStore.accessToken ? children : <Navigate to="/Login" />;

  return <Navigate to="/Login" />;
};

export default PrivateRoute;
