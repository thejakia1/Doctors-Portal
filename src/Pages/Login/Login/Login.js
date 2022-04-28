import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    alert("hello");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              name="password"
              type="password"
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
