import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ellipseImg from "../../assets/images/staric-ellipse.webp";
import ellipseImgMob from "../../assets/images/staric-ellipse-mob.webp";
import { ReactComponent as MetastateLogo } from "../../assets/images/metastate-logo.svg";
import { ReactComponent as FacebookIco } from "../../assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram-svg.svg";
import { ReactComponent as TwitterIco } from "../../assets/images/twitter.svg";
import { ReactComponent as YoutubeIco } from "../../assets/images/youtube.svg";

const Footer = (props) => {
  const { windows, home, intro, benefits, roadmap, getAccess } = props;

  const footerMenuItems = [
    { name: "home", link: () => home() },
    { name: "intro", link: () => intro() },
    { name: "benefits", link: () => benefits() },
    { name: "get access", link: () => getAccess() },
    { name: "roadmap", link: () => roadmap() },
  ];

  const socialItems = [
    { name: "facebook", icon: <FacebookIco />, link: "/" },
    {
      name: "whatsapp",
      icon: <InstagramIcon />,
      link: "https://instagram.com/metastateproperties?igshid=MmIzYWVlNDQ5Yg==",
    },
    {
      name: "twitter",
      icon: <TwitterIco />,
      link: "https://twitter.com/_metastate?s=21&t=NxDMJg1HWKCuTG_JgvzD4g",
    },
  ];

  return (
    <>
      <Box pt={4} pb={2} px={{ xs: 1, md: 5 }}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems={{ xs: "center", md: "stretch" }}
            sx={{
              borderRadius: "20px",
              background: `linear-gradient(90deg, #0092ff 0%, #6aefff 86.77%, #42e3ff 100%)`,
              overflow: "hidden",
            }}
            px={{ md: 4 }}
            my={4}
          >
            <Grid
              item
              md={9}
              py={6}
              px={{ xs: 4, md: 2 }}
              sx={{
                backgroundImage: `url(${ellipseImgMob})`,
                backgroundSize: { xs: "50% 60%", md: "0 0" },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <Typography
                color="#ffffff"
                fontSize="28px"
                fontWeight={600}
                fontFamily="Montserrat"
                mb={3}
                textAlign="center"
                display={{ xs: "flex", md: "none" }}
              >
                Browse amaizing properties in Portugal
              </Typography>
              <Typography
                color="#ffffff"
                fontSize="32px"
                fontWeight={600}
                fontFamily="Montserrat"
                mb={1}
                display={{ xs: "none", md: "flex" }}
              >
                Browse amaizing properties
                <br />
                in Portugal
              </Typography>
              <Grid display={{ xs: "none", md: "flex" }}>
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
              {/* <Grid display={{ xs: "block", md: "none" }} textAlign="center">
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
              </Grid> */}
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
                display: { xs: "none", md: "flex" },
              }}
            ></Grid>

            {/* <Grid
              item
              position="absolute"
              display={{ xs: "flex", md: "none" }}
              sx={{
                zIndex: 0,
                bottom: 0,
                right: 0,
                width: "100px",
                height: "100px",
                backgroundImage: `url(${ellipseImg})`,
                backgroundSize: "80% 80%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
              }}
            ></Grid> */}
          </Grid>

          <Grid mt={{ xs: 6, md: 8 }} mb={2}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item lg={4} display={{ xs: "flex", md: "none" }}>
                <MetastateLogo width="50%" height="50%" />
              </Grid>
              <Grid item lg={4} display={{ xs: "none", md: "flex" }}>
                <MetastateLogo width="40%" height="50%" />
              </Grid>
              <Grid item mt={{ xs: 2, md: 0 }} lg={8}>
                <Grid
                  container
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="flex-start"
                  alignItems={{ xs: "flex-start", md: "center" }}
                  spacing={2}
                  pl={{ xs: 0, md: "2%" }}
                >
                  {footerMenuItems.map((item, index) => (
                    <Grid item key={index}>
                      <a
                        onClick={item.link}
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
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
              spacing={{ xs: 2, md: 3 }}
              mt={{ xs: 1, md: 0 }}
              borderBottom="2px solid #ffffff66"
              pb={1}
            >
              {socialItems.map((item) => (
                <Grid item>
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              display={{ xs: "none", md: "flex" }}
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
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              display={{ xs: "flex", md: "none" }}
            >
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
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
                  px={{ xs: 1, md: 0 }}
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
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
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Cookies Settings
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography
                  color="#ffffff"
                  fontFamily="Montserrat"
                  fontSize={13}
                  fontWeight={600}
                  sx={{ textDecoration: "underline" }}
                >
                  2023 Metastate. All right reserved.
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
