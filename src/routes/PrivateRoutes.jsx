import React from "react";
import { Navigate } from "react-router-dom";
import auth from "./../hooks/auth";

const PrivateRoutes = ({ children }) => {
  const { user } = auth();

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
