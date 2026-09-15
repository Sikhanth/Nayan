
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  // No token = user is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token exists = allow access
  return children;
};

export default ProtectedRoute;

