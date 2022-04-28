import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import login from "../../../images/login.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              // onChange={handleOnChange}
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
              Register
            </Button>

            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button sx={{ width: "75%", m: 1 }} variant="text" type="submit">
                Already Have an Account? Please Login
              </Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
