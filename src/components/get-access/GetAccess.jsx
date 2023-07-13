import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bulletIco from "../../assets/images/bullet-point-white.png";
// import Button from "../button/Button";
import { ArrowRightAlt } from "@mui/icons-material";
import searchPageImg from "../../assets/images/Search-Page.webp";
import whitePapers from "../../assets/files/whitepapers.pdf";

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
        <Box
          py={{ xs: 6, md: 0 }}
          px={{ xs: 3, md: 0 }}
          position="relative"
          sx={{ width: "100%" }}
        >
          <Grid
            display={{ xs: "none", md: "flex" }}
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
          <Grid style={{ zIndex: 99 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} md={6} pl={{ md: 12 }}>
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
                            fontSize="17px"
                            fontWeight={400}
                          >
                            {item}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item mt={4} width="100%">
                    <Grid
                      container
                      direction={{ xs: "column", md: "row" }}
                      justifyContent={{ xs: "center", md: "flex-start" }}
                      alignItems={{ xs: "center", md: "center" }}
                      spacing={{ xs: 3, md: 2 }}
                    >
                      <Grid item width="100%">
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://discord.gg/9nUEkWbZ5h"
                          target="_blank"
                        >
                          <Button
                            // btnText="join discord"
                            // btnEndIco={<ArrowRightAlt />}
                            endIcon={<ArrowRightAlt />}
                            sx={{
                              py: 1,
                              px: 2,
                              width: { xs: "100%", md: "auto" },
                              color: "#ffffff",
                              fontWeight: "medium",
                              fontFamily: "Montserrat",
                              borderRadius: 5,
                              border: 1,
                              textTransform: "capitalize",
                              "&:hover": { background: "transparent" },
                            }}
                          >
                            join discord
                          </Button>
                        </a>
                      </Grid>
                      <Grid item width="100%">
                        <a
                          style={{ textDecoration: "none" }}
                          href={whitePapers}
                        >
                          <Button
                            // btnText="join discord"
                            // btnEndIco={<ArrowRightAlt />}
                            endIcon={<ArrowRightAlt />}
                            sx={{
                              py: 1,
                              px: 2,
                              width: { xs: "100%", md: "auto" },
                              color: "#ffffff",
                              fontWeight: "medium",
                              fontFamily: "Montserrat",
                              borderRadius: 5,
                              border: 1,
                              textTransform: "capitalize",
                              "&:hover": { background: "transparent" },
                            }}
                          >
                            get the whitepaper
                          </Button>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={8} display={{ xs: "flex", md: "none" }}>
                <img
                  src={searchPageImg}
                  alt="search-page"
                  width="100%"
                  height="70%"
                />
              </Grid>
              <Grid
                item
                md={6}
                display={{ xs: "none", md: "block" }}
                textAlign="right"
                style={{ zIndex: 99 }}
              >
                <img
                  src={searchPageImg}
                  alt="search-page"
                  width="90%"
                  height="70%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
};

export default GetAccess;
