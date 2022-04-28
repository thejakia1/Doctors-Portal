import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container, Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", my: 4 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              sit placeat cum incidunt eveniet officiis et non esse numquam
              quibusdam?
            </Typography>
            <Button style={{ backgroundColor: "	#59c7f2" }} variant="contained">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
