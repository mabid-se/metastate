import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import roadmapBg from "../../assets/images/roadmap-bg.png";

const Roadmap = () => {
  return (
    <div>
      <>
        <Box
          py={2}
          position="relative"
          sx={{
            background: `linear-gradient(180deg, #07080D 0%, rgba(7, 8, 13, 0.91) 67.50%, #07080D 88.33%, rgba(7, 8, 13, 0.92) 100%)`,
          }}
        >
          <Grid
            sx={{
              zIndex: 0,
              position: "absolute",
              top: { lg: "33%", xl: "43%" },
              left: { lg: "63%", xl: "62%" },
              width: "160px",
              height: "285px",
              transform: "rotate(161deg)",
              flexShrink: 0,
              borderRadius: "365px",
              background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
              filter: "blur(145px)",
            }}
          />

          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item lg={6}>
                <Typography
                  color="#ffffff"
                  fontSize="46px"
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  Beneficial for
                  <br />
                  buyers and sellers
                </Typography>
                <Typography
                  mt={3}
                  color="#ffffff"
                  fontSize="18px"
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  Metastate will be build in 5 Phases. Download
                  <br />
                  the whitepaper for more information
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={0}
                  sx={{
                    background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
                    backgroundSize: "150px 55px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "36%",
                  }}
                >
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                  >
                    <Typography
                      mt={2}
                      color="#ffffff"
                      textAlign="center"
                      fontSize="20px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      One
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                  >
                    <Typography
                      mt={2}
                      color="#ffffff"
                      textAlign="center"
                      fontSize="20px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Two
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                  >
                    <Typography
                      mt={2}
                      color="#ffffff"
                      textAlign="center"
                      fontSize="20px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Three
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                  >
                    <Typography
                      mt={2}
                      color="#ffffff"
                      textAlign="center"
                      fontSize="20px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Four
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                  >
                    <Typography
                      mt={2}
                      color="#ffffff"
                      textAlign="center"
                      fontSize="20px"
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Five
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: 6,
                pb: 16,
                backgroundImage: `url(${roadmapBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center bottom",
                height: { lg: "80vh", xl: "60vh" },
              }}
            >
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Typography
                    color="#ffffff"
                    fontSize="28px"
                    fontWeight={600}
                    fontFamily="Montserrat"
                    lineHeight="100%"
                  >
                    Conceptualization and
                    <br />
                    Development
                  </Typography>
                </Grid>
                <Grid item position="relative" width="100%" height="100%">
                  {/* ---| First grid |--- */}
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      borderLeft: "2px solid #f2f2f2",
                      width: "245px",
                      padding: "5px",
                      position: "absolute",
                      top: { lg: 170, xl: 213 },
                      left: 70,
                      paddingBottom: "108px",
                    }}
                  >
                    <Typography
                      pl={1}
                      color="#ffffff"
                      fontSize={22}
                      fontWeight={600}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Q1 2023
                    </Typography>
                    <Typography
                      mt={2}
                      pl={1}
                      color="#ffffff"
                      fontSize={13}
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="15px"
                      textAlign="justify"
                    >
                      Project Inception - The idea for Metastate is conceived,
                      and the core team is formed. Extensive research and
                      analysis are conducted to shape the platform's vision and
                      goals.
                    </Typography>
                  </Grid>

                  {/* ---| second grid |--- */}
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      borderLeft: "2px solid #f2f2f2",
                      width: "245px",
                      padding: "5px",
                      position: "absolute",
                      top: { lg: 95, xl: 135 },
                      left: 354,
                      paddingBottom: "90px",
                    }}
                  >
                    <Typography
                      pl={1}
                      color="#ffffff"
                      fontSize={22}
                      fontWeight={600}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Q2 2023
                    </Typography>
                    <Typography
                      mt={2}
                      pl={1}
                      color="#ffffff"
                      fontSize={13}
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="15px"
                      textAlign="justify"
                    >
                      Whitepaper and Tokenomics - The whitepaper is finalized,
                      outlining the platform's architecture, functionalities,
                      and tokenomics. The team conducts internal reviews and
                      seeks feedback from industry experts.
                    </Typography>
                  </Grid>

                  {/* ---| third grid |--- */}
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      borderLeft: "2px solid #f2f2f2",
                      width: "245px",
                      padding: "5px",
                      position: "absolute",
                      top: { xl: 35 },
                      left: 628,
                      paddingBottom: "85px",
                    }}
                  >
                    <Typography
                      pl={1}
                      color="#ffffff"
                      fontSize={22}
                      fontWeight={600}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Q3 2023
                    </Typography>
                    <Typography
                      mt={2}
                      pl={1}
                      color="#ffffff"
                      fontSize={13}
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="15px"
                      textAlign="justify"
                    >
                      Team Expansion and Partnerships - The core team expands
                      with the addition of key talents across various domains.
                      Partnerships with industry-leading organizations and
                      blockchain experts are established to enhance the
                      project's credibility and expertise.
                    </Typography>
                  </Grid>

                  {/* ---| fourth grid |--- */}
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      borderLeft: "2px solid #ffffff",
                      width: "235px",
                      padding: "5px",
                      position: "absolute",
                      marginTop: { lg: "-8%", xl: "-5%" },
                      left: 903,
                      paddingBottom: "65px",
                    }}
                  >
                    <Typography
                      pl={1}
                      color="#ffffff"
                      fontSize={22}
                      fontWeight={600}
                      fontFamily="Montserrat"
                      lineHeight="100%"
                    >
                      Q4 2023
                    </Typography>
                    <Typography
                      mt={2}
                      pl={1}
                      color="#ffffff"
                      fontSize={13}
                      fontWeight={400}
                      fontFamily="Montserrat"
                      lineHeight="15px"
                      textAlign="justify"
                    >
                      Token Pre-sale and Public Sale - The Metastate Token
                      (Mets) - In the fourth quarter of 2023, we are thrilled to
                      launch the Metastate Token (METS) as the heart of our
                      ecosystem. METS will serve as the primary utility token,
                      powering transactions, staking, and accessing exclusive
                      features within the Metastate platform.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </>
    </div>
  );
};

export default Roadmap;
