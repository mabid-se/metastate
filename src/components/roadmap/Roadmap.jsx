import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import roadmapBg from "../../assets/images/roadmap-bg.png";
import roadmapBgMob from "../../assets/images/roadmap-bg-mob.png";
import roadmapBullet from "../../assets/images/roadmap-bullet.png";
import "../../App.css";

const Roadmap = () => {
  const ref1 = useRef(null);

  const stepsData1 = [
    {
      heading: "Q1 2023",
      description:
        "Project Inception - The idea for Metastate is conceived, and the core team is formed. Extensive research and analysis are conducted to shape the platform’s vision and goals.",
      top: { lg: 80, xl: 217 },
      left: 70,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q2 2023",
      description:
        "Whitepaper and Tokenomics - The whitepaper is finalized, outlining the platform’s architecture, functionalities, and tokenomics. The team conducts internal reviews and seeks feedback from industry experts.",
      top: { lg: 23, xl: 135 },
      left: 354,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q3 2023",
      description:
        "Team Expansion and Partnerships - The core team expands with the addition of key talents across various domains. Partnerships with industry-leading organizations and blockchain experts are established to enhance the project's credibility and expertise.",
      top: { lg: "-30px", xl: 55 },
      left: 628,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q4 2023",
      description:
        "Token Pre-sale and Public Sale - The Metastate Token (Mets) - In the fourth quarter of 2023, we are thrilled to launch the Metastate Token (METS) as the heart of our ecosystem. METS will serve as the primary utility token, powering transactions, staking, and accessing exclusive features within the Metastate platform.",
      top: { lg: "-90px", xl: "-35px" },
      left: 903,
      height: { lg: "210px", xl: "240px" },
    },
  ];


  const stepsData2 = [
    {
      heading: "Q4 2023",
      description:
        "Genesis NFT Release - The Metastate Collection - Genesis NFTs are introduced, offering users the opportunity to boost their profitability and engage in the world of digital collectibles. The NFT release follows a carefully planned roadmap, including pre-sale and public sale phases.",
      top: { lg: 80, xl: 217 },
      left: 70,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q1 2023",
      description:
        "Blockchain Integration - Metastate selects the Cardano blockchain as the underlying infrastructure due to its scalability, security, and sustainability features. Integration with the Cardano network begins, leveraging its advanced smart contract capabilities.",
        top: { lg: 23, xl: 135 },
        left: 354,
        height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q2 2023",
      description:
        "MVP Development - The Minimum Viable Product (MVP) development commences, focusing on core functionalities such as property tokenization, ownership transfers, and staking mechanisms. User interface design and user experience optimization are prioritized during this phase.",
        top: { lg: "-30px", xl: 55 },
        left: 628,
        height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q3 2023",
      description:
        "MVP Testing and Feedback - The MVP undergoes rigorous testing and auditing to ensure security, performance, and functionality. External beta testing is conducted to gather user feedback and refine the platform based on user insights.",
        top: { lg: "-90px", xl: "-35px" },
        left: 903,
        height: { lg: "210px", xl: "240px" },
    },

  ];
  const stepsData3 = [
    {
      heading: "Q1 2024",
      description:
        "Public Launch - The Metastate platform is officially launched to the public. The platform opens for property tokenization, investment, and staking.",
      top: { lg: 80, xl: 217 },
      left: 70,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q2 2024",
      description:
        "Platform Enhancement and Community Growth - Continuous enhancements and updates are made to the Metastate platform based on user feedback and market demands. Community engagement initiatives, educational resources, and partnerships are established to foster a growing and supportive user base",
      top: { lg: 23, xl: 135 },
      left: 354,
      height: { lg: "210px", xl: "240px" },
    },
    {
      heading: "Q4 2024 and Beyond",
      description:
        "Expansion and Integration - Metastate aims to expand its ecosystem by integrating with external payment systems, real estate platforms, and other blockchain networks. Strategic partnerships are formed to broaden the range of investment opportunities and enhance user convenience.",

      top: { lg: "-30px", xl: 55 },
      left: 628,
      height: { lg: "210px", xl: "240px" },
    }
  ];

  const [stepsData, setRoadMapData] = useState(stepsData1);
  let [Background1, setbackground1] = useState(1);
  let [Background2, setbackground2] = useState(0);
  let [Background3, setbackground3] = useState(0);

 



  return (
    <div id="roadMap" ref={ref1}>
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
              display: { xs: "none", md: "flex" },
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
              mt={4}
              px={{ xs: 1, md: 0 }}
            >
              <Grid item lg={6}>
                <Typography
                  color="#ffffff"
                  fontSize={{ xs: "32px", md: "46px" }}
                  fontWeight={600}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                >
                  Roadmap
                </Typography>
                <Typography
                  mt={3}
                  color="#ffffff"
                  fontSize="18px"
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight="100%"
                  display={{ xs: "none", md: "block" }}
                >
                  Metastate will be build in 5 Phases. Download
                  <br />
                  the whitepaper for more information
                </Typography>
                <Typography
                  my={4}
                  color="#ffffff"
                  display={{ xs: "flex", md: "none" }}
                  fontSize="15px"
                  fontWeight={400}
                  fontFamily="Montserrat"
                >
                  Metastate will be build in 5 Phases. Download the whitepaper
                  for more information
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={0}
                  className="roadMap"
                  display={{ xs: "none", md: "flex" }}
                >
                  <Grid
                    item
                    width="85px"
                    height="55px"
                    borderRight="1px solid #ffffff"
                    sx={{
                      background: Background1 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                    }}
                    onClick={() => {  
                      setbackground3(false);
                      setbackground2(false);
                      setbackground1(1); setRoadMapData(stepsData1)}}
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
                    sx={{
                      background: Background2 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                    }}
                    onClick={() => {
                      setbackground3(false);
                      setbackground2(true);
                      setbackground1(false);
                      setRoadMapData(stepsData2)
                    }}
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
                    sx={{
                      background: Background3 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                    }}
                    onClick={() => {
                      setbackground1(false);
                      setbackground2(false);
                      setbackground3(true); setRoadMapData(stepsData3)
                    }}
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
                </Grid>

                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  display={{ xs: "flex", md: "none" }}
                  sx={{
                    backgroundSize:
                      stepsData === stepsData1
                        ? "75px 50px"
                        : stepsData === stepsData2
                        ? "150px 50px"
                        : "225px 50px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Grid
                    item
                    width="75px"
                    sx={{
                      background: Background1 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                    }}
                    height="50px"
                    borderRight="1px solid #ffffff"
                    onClick={() => {  
                      setbackground3(false);
                      setbackground2(false);
                      setbackground1(1); setRoadMapData(stepsData1)}}
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
                    sx={{
                      background: Background2 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                    }}
                    width="75px"
                    height="50px"
                    borderRight="1px solid #ffffff"
                    onClick={() => {
                      setbackground3(false);
                      setbackground2(true);
                      setbackground1(false);
                      setRoadMapData(stepsData2)
                    }}
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
                    width="75px"
                      sx={{
                        background: Background3 ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)` : '',
                      }}
                    height="50px"
                    borderRight="1px solid #ffffff"
                    onClick={() => {
                      setbackground1(false);
                      setbackground2(false);
                      setbackground3(true); setRoadMapData(stepsData3)
                    }
                    }
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
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: { xs: 4, md: 6 },
                px: { xs: 1, md: 0 },
                pb: { xs: 8, md: 16 },
                backgroundImage: {
                  xs: `url(${roadmapBgMob})`,
                  md: `url(${roadmapBg})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "80% 125%", md: "100% 100%" },
                backgroundPosition: { xs: "right bottom", md: "center bottom" },
                height: { lg: "60vh", xl: "60vh" },
              }}
            >
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Typography
                    display={{ xs: "none", md: "block" }}
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
                  <Typography
                    display={{ xs: "block", md: "none" }}
                    color="#ffffff"
                    fontSize="28px"
                    fontWeight={500}
                    fontFamily="Montserrat"
                  >
                    Conceptualization
                    <br />
                    and Development
                  </Typography>
                </Grid>
                <Grid
                  item
                  position="relative"
                  width="100%"
                  height="100%"
                  display={{ xs: "none", md: "flex" }}
                >
                  {/* ---| First grid |--- */}
                  {stepsData.map((item, index) => (
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "245px",
                        height: item.height,
                        position: "absolute",
                        top: item.top,
                        left: item.left,
                        borderLeft: "2px solid #f2f2f2",
                        borderImage: `linear-gradient(180deg, #0092FF 24%,  #42E3FF 60%, #fff 100%) 1`,
                        paddingLeft: "5px",
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
                        {item.heading}
                      </Typography>
                      <Typography
                        mt={2}
                        pl={1}
                        color="#C9C9C9"
                        fontSize={13}
                        fontWeight={400}
                        fontFamily="Montserrat"
                        lineHeight="15px"
                        textAlign="left"
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                  ))}
                  {/* ---| second grid |--- */}
                  {/* <Grid
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
                      paddingBottom: {lg:"10px", xl:"130px"},
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
                  </Grid> */}

                  {/* ---| third grid |--- */}
                  {/* <Grid
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
                      paddingBottom: {lg:"10px", xl:"100px"},
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
                  </Grid> */}

                  {/* ---| fourth grid |--- */}
                  {/* <Grid
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
                      paddingBottom: {lg:"10px", xl:"80px"},
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
                  </Grid> */}
                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              direction="column"
              justifyContent="center"
              display={{ xs: "flex", md: "none" }}
              px={1}
            >
              {stepsData.map((item, index) => (
                <Grid
                  key={index}
                  item
                  sx={{
                    position: "relative",
                    height: "145px",
                    borderLeft: "2px solid #f2f2f2",
                    borderImage: `linear-gradient(180deg, #0092FF 24%,  #42E3FF 60%, #fff 100%) 1`,
                    pl: 2,
                    mb: 2,
                    py: 2,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-9px",
                      bottom: "-22px",
                      width: "22px",
                      height: "22px",
                      backgroundImage: `url(${roadmapBullet})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        color="#ffffff"
                        fontSize="19px"
                        fontWeight={600}
                        fontFamily="Montserrat"
                      >
                        {item.heading}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="#c9c9c9"
                        fontSize="11px"
                        fontWeight={400}
                        fontFamily="Montserrat"
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </>
    </div>
  );
};

export default Roadmap;
