import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroBg from "../../assets/images/matasate-hero-img.png";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            width={{ xs: "85%", lg: "55%" }}
            height="100vh"
          >
            <Grid item>
              <Typography
                // variant="h2"
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={78}
                fontWeight={600}
              >
                Rebirth of
                <br />
                Real Estate
              </Typography>
            </Grid>
            <Grid item width="80%" mt={2}>
              <Typography
                // variant="h5"
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={22}
                fontWeight={500}
              >
                Metastate is lowering the entry barrier to the real estate
                market and making it accesible for everyone.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
