import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
