import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroBg from "../../assets/images/matasate-hero-img.webp";
const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "110% 115%",
          backgroundPosition: "center top",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width={{ xs: "85%", lg: "55%" }}
          height="100vh"
          paddingLeft={9}
        >
          <Grid item>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={82}
              fontWeight={600}
              lineHeight="98%"
            >
              Rebirth of
              <br />
              Real Estate
            </Typography>
          </Grid>
          <Grid item width="80%" mt={5}>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={23}
              fontWeight={600}
            >
              Metastate is lowering the entry barrier to the real estate market
              and making it accesible for everyone.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
