import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 60,
};

const AppointmentBanner = () => {
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "400px", marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 4 }}
                style={{ color: "#59c7f2" }}
              >
                Appointment
              </Typography>
              <Typography variant="h4" style={{ color: "white" }}>
                Make an Appointment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 5 }}
                style={{ color: "white", fontSize: 16, fontWeight: 300 }}
              >
                We are taking online appointment. Create your appointment today
                and get the doctor's schedule.
              </Typography>
              <Button
                style={{ backgroundColor: "#59c7f2", fontWeight: 600 }}
                variant="contained"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
