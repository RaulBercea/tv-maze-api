import React, {useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";
import { auth } from "../firebase";

function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (!user) {
      navigate("/");
    }
  })
  return children
}

export default ProtectedRoute;
