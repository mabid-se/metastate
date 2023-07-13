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
          backgroundSize: { xs: "190% 94%", md: "110% 115%" },
          backgroundPosition: { xs: "center top", md: "center top" },
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width={{ xs: "90%", lg: "55%" }}
          height="100vh"
          paddingLeft={{ xs: 3, md: 9 }}
        >
          <Grid item>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={40}
              fontWeight={500}
              lineHeight="110%"
              display={{ xs: "flex", md: "none" }}
              mt={2}
            >
              Rebirth of Real
              <br />
              Estate
            </Typography>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={82}
              fontWeight={600}
              lineHeight={"98%"}
              display={{ xs: "none", md: "flex" }}
            >
              Rebirth of
              <br />
              Real Estate
            </Typography>
          </Grid>
          <Grid item mt={{ xs: 2, lg: 5 }}>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={16}
              fontWeight={400}
              display={{ xs: "flex", md: "none" }}
            >
              Metastate is lowering the entry barrier
              <br />
              to the real estate market and making it
              <br />
              accesible for everyone.
            </Typography>
            <Typography
              color="#ffffff"
              fontFamily="Montserrat"
              fontSize={23}
              fontWeight={600}
              display={{ xs: "none", md: "flex" }}
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
