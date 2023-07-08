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
          backgroundSize: "100% 122%",
          backgroundPosition: "center top",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width={{ xs: "85%", lg: "55%" }}
          height="110vh"
          paddingLeft={10}
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
          <Grid item width="80%" mt={4}>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={22}
              fontWeight={500}
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
