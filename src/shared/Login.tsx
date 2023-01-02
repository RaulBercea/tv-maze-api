import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
      <Box component="form">
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required
          id="outlined-required"
          label="Email"
        />
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required
          id="outlined-required"
          label="Password"
          type="Password"
        />
        <Button sx={{ width: "100%", marginTop: 2 }} variant="contained">
          Login
        </Button>
      </Box>
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
