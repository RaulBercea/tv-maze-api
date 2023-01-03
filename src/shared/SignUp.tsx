import React, { useState } from "react";
import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Paper
      sx={{
        maxWidth: 500,
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
        Signup
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required
          label="Email"
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
        <Button
          type="submit"
          sx={{ width: "100%", marginTop: 2 }}
          variant="contained"
        >
          SignUp
        </Button>
      </form>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", marginTop: 2 }}
      >
        {error && (
          <Alert sx={{ marginBottom: 2 }} severity="error">
            {error}
          </Alert>
        )}
        Already have an account?{" "}
        <Link to="/">
          <Typography sx={{ fontWeight: "bold" }} variant="button">
            Login
          </Typography>
        </Link>
      </Typography>
    </Paper>
  );
}

export default SignUp;
