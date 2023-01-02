import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { userLogin } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError("");
    try {
      await userLogin(email, password);
      navigate("/home");
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Paper
      sx={{
        width: 500,
        maxHeight: 500,
        margin: "auto",
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        padding: 3,
      }}
      elevation={3}
    >
      <Typography sx={{ margin: "auto" }} variant="h2" component="h1">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required
          label="Password"
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={{ width: "100%", marginTop: 2 }} variant="contained">
          Login
        </Button>
      </form>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", marginTop: 2 }}
      >
        Don't have an account?{" "}
        <Link to="/signup">
          <Typography sx={{ fontWeight: "bold" }} variant="button">
            Sign Up
          </Typography>
        </Link>
      </Typography>
    </Paper>
  );
};

export default Login;
