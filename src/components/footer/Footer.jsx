import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ellipseImg from "../../assets/images/staric-ellipse-.png";
import { ReactComponent as MetastateLogo } from "../../assets/images/metastate-logo.svg";
import { ReactComponent as FacebookIco } from "../../assets/images/facebook.svg";
import { ReactComponent as WhatsappIco } from "../../assets/images/whatsapp.svg";
import { ReactComponent as TwitterIco } from "../../assets/images/twitter.svg";
import { ReactComponent as YoutubeIco } from "../../assets/images/youtube.svg";

const Footer = () => {
  const footerMenuItems = [
    { name: "home", link: "/" },
    { name: "intro", link: "/intro" },
    { name: "benefits", link: "/benefits" },
    { name: "get access", link: "/get-access" },
    { name: "roadmap", link: "/roadmap" },
  ];
  const socialItems = [
    { name: "facebook", icon: <FacebookIco />, link: "/" },
    { name: "whatsapp", icon: <WhatsappIco />, link: "/intro" },
    { name: "twitter", icon: <TwitterIco />, link: "/benefits" },
    { name: "youtube", icon: <YoutubeIco />, link: "/get-access" },
  ];

  return (
    <>
      <Box pt={4} pb={2} px={5}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            sx={{
              borderRadius: "20px",
              background: `linear-gradient(90deg, #0092ff 0%, #6aefff 86.77%, #42e3ff 100%)`,
            }}
            px={4}
            my={4}
          >
            <Grid item xs={9} py={6} px={2}>
              <Typography
                color="#ffffff"
                fontSize="32px"
                fontWeight={600}
                fontFamily="Montserrat"
                mb={1}
              >
                Browse amaizing properties
                <br />
                in Portugal
              </Typography>
              <Button
                sx={{
                  py: 1,
                  px: 2,
                  background: "#07080D",
                  fontWeight: 500,
                  fontFamily: "Montserrat",
                  color: "#ffffff",
                  border: 1,
                  borderColor: "#07080D",
                  borderRadius: 5,
                  "&:hover": { border: 1, color: "#07080D" },
                }}
              >
                start now
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              pr={2}
              sx={{
                backgroundImage: `url(${ellipseImg})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            ></Grid>
          </Grid>

          <Grid mt={8} mb={2}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item lg={4}>
                <MetastateLogo width="40%" height="50%" />
              </Grid>
              <Grid item lg={8}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                  pl="2%"
                >
                  {footerMenuItems.map((item, index) => (
                    <Grid item key={index}>
                      <a
                        href="#"
                        style={{ color: "#ffffff", textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            "&:hover": { color: "#0294FF" },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
              borderBottom={2}
              borderColor="#ffffff66"
              pb={1}
            >
              {socialItems.map((item) => (
                <Grid item>
                  <a href="#">{item.icon}</a>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                >
                  2023 Metastate. All right reserved.
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Terms of Service
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Cookies Settings
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
