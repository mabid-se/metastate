import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import walletIco from "../../assets/images/setup-wallet.png";
import propertiesIco from "../../assets/images/search-properties.png";
import buyingIco from "../../assets/images/start-buying.png";
import Button from "../button/Button";
import { ReactComponent as StarIco } from "../../assets/images/Star-1.svg";

const BecomeInvestor = () => {
  const stepsData = [
    {
      icon: walletIco,
      title: "Set up your wallet",
      details: "We have integration with some differents wallets",
    },
    {
      icon: propertiesIco,
      title: "Search Properties",
      details: "See the listings of properties that you could buy",
    },
    {
      icon: buyingIco,
      title: "Start Buying",
      details:
        "Buy and Sell properties, send offers and manage your portafolio",
    },
  ];

  return (
    <div>
      <>
        <Box sx={{ background: "#07080D", position: "relative" }}>
          <Grid
            sx={{
              position: "absolute",
              top: "17%",
              right: "10%",
              width: "202px",
              height: "315px",
              transform: "rotate(150deg)",
              flexShrink: 0,
              borderRadius: "365px",
              background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
              filter: "blur(150px)",
            }}
          />
          <Grid py={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item position="relative">
                <div style={{ position: "absolute", top: "9px", left: "50px" }}>
                  <StarIco width={28} height={28} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "58px",
                    bottom: "-7px",
                  }}
                >
                  <StarIco width={28} height={28} />
                </div>
                <Typography
                  color="#46E4FF"
                  fontWeight={400}
                  fontStyle="italic"
                  fontFamily="Montserrat"
                  textAlign="center"
                >
                  For Creators
                </Typography>
                <Typography
                  mt={1}
                  color="#ffffff"
                  fontSize={28}
                  fontWeight={500}
                  fontFamily="Montserrat"
                  textAlign="center"
                >
                  How to become a Real Estate Investor
                </Typography>
                <Typography
                  mt={1}
                  color="#ffffff"
                  fontSize={13}
                  fontWeight={500}
                  fontFamily="Montserrat"
                  textAlign="center"
                >
                  Few steps to start selling awesome properties
                </Typography>
              </Grid>

              <Grid item mt={6} mb={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                >
                  {stepsData.map((item, index) => (
                    <Grid item px={3}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        border="1px solid #ffffff"
                        borderRadius={3}
                        background="#000000"
                        width="310px"
                        pt={3}
                        px={4}
                        pb={5}
                      >
                        <img src={item.icon} width={65} height={65} />
                        <Typography
                          mt={2}
                          color="#ffffff"
                          fontSize="18px"
                          fontWeight={600}
                          fontFamily="Montserrat"
                          lineHeight="100%"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          mt={2}
                          color="#ffffff"
                          fontSize="14px"
                          fontWeight={400}
                          fontFamily="Montserrat"
                          lineHeight="150%"
                          textAlign="center"
                        >
                          {item.details}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Button btnText="start now" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
};

export default BecomeInvestor;
