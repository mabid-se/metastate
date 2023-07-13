import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as CardanoVector } from "../../assets/images/Vector.svg";
import singleMetastate from "../../assets/images/Metastate-Single.png";
import bgNet from "../../assets/images/BG-Net.png";
import bgNetMob from "../../assets/images/bg-net-mob.png";

const BuyRealEstate = () => {
  return (
    <>
      <Box position="relative">
        <div
          style={{
            zIndex: 0,
            position: "absolute",
            top: "46%",
            left: "-4%",
            width: "270px",
            height: "295px",
            transform: "rotate(161deg)",
            flexShrink: 0,
            borderRadius: "570px",
            background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
            filter: "blur(176.5px)",
          }}
        />
        <div style={{ zIndex: 99 }}>
          <Grid py={4} display={{ xs: "flex", md: "none" }}>
            <Grid container direction="column">
              <Grid borderTop="1px solid #ffffff66">
                <Grid container direction="row">
                  <Grid
                    item
                    width="60%"
                    borderRight="1px solid #ffffff66"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      color="#ffffff"
                      fontSize="24px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      textAlign="center"
                    >
                      Buy real estate
                    </Typography>
                  </Grid>
                  <Grid item width="40%">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      px={1}
                    >
                      <Grid item width="30%" pl={1}>
                        <CardanoVector width="85%" />
                      </Grid>
                      <Grid item width="70%" px={1}>
                        <Typography
                          color="#ffffff"
                          fontSize="14px"
                          fontWeight={400}
                          fontFamily="Montserrat"
                        >
                          Powered by Cardano
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                borderTop="1px solid #ffffff66"
                borderBottom="1px solid #ffffff66"
              >
                <Grid
                  item
                  width="30%"
                  borderRight="1px solid #ffffff66"
                  textAlign="center"
                  py={1}
                >
                  <img src={singleMetastate} width="65%" />
                </Grid>
                <Grid item width="70%" px={2}>
                  <Typography
                    color="#ffffff"
                    fontSize="24px"
                    fontWeight={400}
                    fontFamily="Montserrat"
                    textAlign="right"
                  >
                    one m2 at the time
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Container>
            <Grid py={12} display={{ xs: "none", md: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    borderTop: "1px solid #ffffff66",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        width: "60%",
                        borderRight: "1px solid #ffffff66",
                      }}
                    >
                      <Typography
                        color="#ffffff"
                        fontSize="79px"
                        fontWeight={400}
                        fontFamily="Montserrat"
                        lineHeight="150%"
                      >
                        Buy real estate
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: 20 }}>
                        <Typography
                          color="#ffffff"
                          fontSize="27px"
                          fontWeight={400}
                          fontFamily="Montserrat"
                        >
                          Powered by Cardano
                        </Typography>
                      </div>
                      <div>
                        <CardanoVector width="65%" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderTop: "1px solid #ffffff66",
                    borderBottom: "1px solid #ffffff66",
                  }}
                >
                  <div
                    style={{ width: "25%", borderRight: "1px solid #ffffff66" }}
                  >
                    <img src={singleMetastate} width="50%" />
                  </div>
                  <div
                    style={{
                      width: "75%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      color="#ffffff"
                      fontSize="76px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                    >
                      one m2 at the time
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid container direction="column" spacing={3} px={1}>
              <Grid item mt={{ xs: 4, md: 0 }}>
                <Typography
                  color="#ffffff"
                  fontSize={{xs:'36px', md:"46px"}}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  What is Metastate?
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={{ xs: 4, md: 10 }}
                >
                  <Grid item lg={6} mt={{ xs: 1, md: 0 }}>
                    <Typography
                      color="#ffffff"
                      fontSize="16px"
                      fontWeight={500}
                      fontFamily="Montserrat"
                      textAlign={{ xs: "justify", md: "left" }}
                    >
                      Metastate is a groundbreaking platform that revolutionizes
                      the way we invest in and interact with real estate.
                      Powered by blockchain technology, Metastate enables the
                      tokenization of real estate assets, turning them into
                      unique digital assets called NFTs (Non-Fungible Tokens).
                      With Metastate, anyone can easily buy, sell, and trade
                      fractional ownership in properties worldwide, opening up a
                      world of possibilities for investors, property owners, and
                      enthusiasts.
                    </Typography>
                  </Grid>
                  <Grid item lg={6} mt={{ xs: 1, md: 0 }}>
                    <Typography
                      color="#ffffff"
                      fontSize="17px"
                      fontWeight={500}
                      fontFamily="Montserrat"
                      textAlign={{ xs: "justify", md: "left" }}
                    >
                      Through Metastate, we bridge the traditional real estate
                      market with the innovative world of digital assets. By
                      tokenizing real estate, we unlock liquidity,
                      accessibility, and a new level of transparency for
                      property investments. With just a few clicks, investors
                      can now own a fraction of a property, diversify their
                      portfolio, and participate in the global real estate
                      market like never before.{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              mt={{ xs: 2, md: 6 }}
              mb={{ xs: 6, md: 0 }}
              sx={{
                backgroundImage: {
                  xs: `url(${bgNetMob})`,
                  md: `url(${bgNet})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "95% 85%", md: "80% 100%" },
                backgroundPosition: "right bottom",
              }}
            >
              <Grid item mt={{ xs: 12, md: 16 }} mb={3} px={1}>
                <Typography
                  color="#ffffff"
                  fontSize={{ xs: "29px", md: "49px" }}
                  fontWeight={500}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  Beneficial for
                  <br />
                  buyers and sellers
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </>
  );
};

export default BuyRealEstate;
