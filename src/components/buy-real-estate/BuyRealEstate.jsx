import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as CardanoVector } from "../../assets/images/Vector.svg";
import singleMetastate from "../../assets/images/Metastate-Single.png";
import bgNet from "../../assets/images/BG-Net.png";

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
          <Container>
            <Grid py={12}>
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
                        fontSize="62px"
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
                          fontSize="24px"
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
                      fontSize="57px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                    >
                      one m2 at the time
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography
                  color="#ffffff"
                  fontSize="46px"
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  What is M-
                  <br />
                  etastate?
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={10}
                >
                  <Grid item lg={6}>
                    <Typography
                      color="#ffffff"
                      fontSize="16px"
                      fontWeight={500}
                      fontFamily="Montserrat"
                      textAlign="justify"
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
                  <Grid item lg={6}>
                    <Typography
                      color="#ffffff"
                      fontSize="16px"
                      fontWeight={500}
                      fontFamily="Montserrat"
                      textAlign="justify"
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
              mt={6}
              sx={{
                backgroundImage: `url(${bgNet})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 100%",
                backgroundPosition: "right bottom",
              }}
            >
              <Grid item mt={16} mb={3}>
                <Typography
                  color="#ffffff"
                  fontSize="49px"
                  fontWeight={400}
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
