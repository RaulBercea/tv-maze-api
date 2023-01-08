import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";
import { auth } from "../firebase";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
