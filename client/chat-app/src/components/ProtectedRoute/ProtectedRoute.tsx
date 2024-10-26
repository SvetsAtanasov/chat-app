import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthProvider/AuthProvider";

const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const { isAuth } = useAuth();

  return <>{isAuth ? element : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;