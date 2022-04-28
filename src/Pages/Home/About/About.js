import { Button, CardActions, Grid, Typography, Box } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";

const About = () => {
  return (
    <div>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "70%", height: "75%" }} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ my: "auto" }}>
            <Typography
              mt={5}
              style={{ textAlign: "left" }}
              variant="h3"
              gutterBottom
            >
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography
              mt={5}
              pr={5}
              style={{ textAlign: "left", color: "gray" }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              facere beatae voluptatem, quam accusamus repellat quibusdam!
              Voluptate ipsam rem blanditiis ea aspernatur fugiat! Rerum,
              obcaecati dolorem a voluptate doloremque culpa ipsum error non
              architecto distinctio quidem temporibus aut dolores possimus ab
              velit iste autem quaerat sed debitis et cumque adipisci?
            </Typography>
            <CardActions>
              <Button
                style={{
                  backgroundColor: "#59c7f2",
                  marginTop: "2rem",
                  fontWeight: 600
                }}
                variant="contained"
              >
                Learn More
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
