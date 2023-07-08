import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bulletIco from "../../assets/images/bullet-point-white.png";
import Button from "../button/Button";
import { ArrowRightAlt } from "@mui/icons-material";
import searchPageImg from "../../assets/images/Search-Page.png";

const GetAccess = () => {
  const bulletList = [
    "Be Part of the Project",
    "Do Staking to Win $METS",
    "Buy and Sell Square Meters of Properties",
    "Buy our NFT Boost Collection",
    "Special Role on Discord",
  ];

  return (
    <div>
      <>
        <Box py={4} position="relative">
          <div
            style={{
              zIndex: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "160px",
              height: "285px",
              transform: "rotate(161deg)",
              flexShrink: 0,
              borderRadius: "365px",
              background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
              filter: "blur(125px)",
            }}
          />
          <div style={{ zIndex: 99 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item lg={6} pl={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      color="#ffffff"
                      fontFamily="Montserrat"
                      fontSize="52px"
                      fontWeight={500}
                    >
                      Get Access!
                    </Typography>
                    <Typography
                      color="#ffffff"
                      fontFamily="Montserrat"
                      fontSize="18px"
                      fontWeight={600}
                    >
                      Only those who buy this first collection will:
                    </Typography>
                  </Grid>
                  <Grid item mt={4}>
                    {bulletList.map((item, index) => (
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        key={index}
                        mt={1}
                      >
                        <Grid item xs={1}>
                          <img src={bulletIco} alt="bullet-ico" width="13px" />
                        </Grid>
                        <Grid item xs={11}>
                          <Typography
                            color="#ffffff"
                            fontFamily="Montserrat"
                            fontSize="16px"
                            fontWeight={600}
                          >
                            {item}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item mt={4}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Button
                          btnText="join discord"
                          btnEndIco={<ArrowRightAlt />}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          btnText="get the whitepaper"
                          btnEndIco={<ArrowRightAlt />}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} textAlign="right" style={{ zIndex: 99 }}>
                <img
                  src={searchPageImg}
                  alt="search-page"
                  width="90%"
                  height="70%"
                />
              </Grid>
            </Grid>
          </div>
        </Box>
      </>
    </div>
  );
};

export default GetAccess;
