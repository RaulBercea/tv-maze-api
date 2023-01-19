import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

interface PropTypes {
  children: JSX.Element;
}

function ProtectedRoute({ children }: PropTypes) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return children;
}

export default ProtectedRoute;
