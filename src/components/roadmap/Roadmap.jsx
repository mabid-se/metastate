import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import roadmapBg from "../../assets/images/roadmap-bg.png";
import "../../App.css";

const Roadmap = () => {
  const ref1 = useRef(null);

  const stepsData1 = [
    {
      heading: "Q1 2023",
      description:
        "Project inception - The idea for Metastate is conceived and the core team is formed. Extensive research and analysis are counducted to shape the platforms vision and goals",
      top: { lg: 170, xl: 213 },
      left: 70,
      paddingBottom: { lg: "10px", xl: "120px" },
    },
    {
      heading: "Q2 2023",
      description:
        "Whitepaper and Tokenomics - The whitepaper is finalized, outlining the platform's architecture, functionalities, and tokenomics. The team conducts internal reviews and seeks feedback from industry experts.",
      top: { lg: 95, xl: 135 },
      left: 354,
      paddingBottom: { lg: "10px", xl: "100px" },
    },

    {
      heading: "Q3 2023",
      description:
        "Team Expansion and Partnerships - The core team expands with the addition of key talents across various domains. Partnerships with industry-leading organizations and blockchain experts are established to enhance the project's credibility and expertise.",
      top: { xl: 35 },
      left: 628,
      paddingBottom: { lg: "10px", xl: "80px" },
    },

    {
      heading: "Q4 2023",
      description:
        "Token Pre-sale and Public Sale - The Metastate Token (Mets) - In the fourth quarter of 2023, we are thrilled to launch the Metastate Token (METS) as the heart of our ecosystem. METS will serve as the primary utility token, powering transactions, staking, and accessing exclusive features within the Metastate platform.",
      top: { lg: "-8%", xl: "-5%" },
      left: 903,
      paddingBottom: { lg: "10px", xl: "20px" },
    },
  ];

  const [stepsData, setRoadMapData] = useState(stepsData1);

  const stepsData2 = [
    {
      heading: "Q1 2023",
      description:
        "Blockchain Integration - Metastate selects the Cardano blockchain as the underlying infrastructure due to its scalability, security, and sustainability features. Integration with the Cardano network begins, leveraging its advanced smart contract capabilities",
      top: { lg: 170, xl: 213 },
      left: 70,
      paddingBottom: { lg: "10px", xl: "120px" },
    },
    {
      heading: "Q2 2023",
      description:
        "MVP Development - The Minimum Viable Product (MVP) development commences, focusing on core functionalities such as property tokenization, ownership transfers, and staking mechanisms. User interface design and user experience optimization are prioritized during this phase",
      top: { lg: 95, xl: 135 },
      left: 354,
      paddingBottom: { lg: "10px", xl: "100px" },
    },

    {
      heading: "Q3 2023",
      description:
        "MVP Testing and Feedback - The MVP undergoes rigorous testing and auditing to ensure security, performance, and functionality. External beta testing is conducted to gather user feedback and refine the platform based on user insights.",
      top: { xl: 35 },
      left: 628,
      paddingBottom: { lg: "10px", xl: "80px" },
    },

    {
      heading: "Q4 2023",
      description:
        "Blockchain Integration - Metastate selects the Cardano blockchain as the underlying infrastructure due to its scalability, security, and sustainability features. Integration with the Cardano network begins, leveraging its advanced smart contract capabilities",
      marginTop: { lg: "-8%", xl: "-5%" },
      left: 903,
      paddingBottom: { lg: "10px", xl: "20px" },
    },
  ];

  const stepsData3 = [
    {
      heading: "Q1 2024",
      description:
        "Public Launch - The Metastate platform is officially launched to the public. The platform opens for property tokenization, investment, and staking.",
      top: { lg: 170, xl: 213 },
      left: 70,
      paddingBottom: { lg: "10px", xl: "120px" },
    },
    {
      heading: "Q2 2024",
      description:
        "Platform Enhancement and Community Growth - Continuous enhancements and updates are made to the Metastate platform based on user feedback and market demands. Community engagement initiatives, educational resources, and partnerships are established to foster a growing and supportive user base",
      top: { lg: 95, xl: 135 },
      left: 354,
      paddingBottom: { lg: "10px", xl: "100px" },
    },

    {
      heading: "Q3 2024",
      description:
        ": Expansion and Integration - Metastate aims to expand its ecosystem by integrating with external payment systems, real estate platforms, and other blockchain networks. Strategic partnerships are formed to broaden the range of investment opportunities and enhance user convenience.",
      top: { xl: 35 },
      left: 628,
      paddingBottom: { lg: "10px", xl: "80px" },
    },

    {
      heading: "Q4 2024",
      description:
        "Blockchain Integration - Metastate selects the Cardano blockchain as the underlying infrastructure due to its scalability, security, and sustainability features. Integration with the Cardano network begins, leveraging its advanced smart contract capabilities",
      marginTop: { lg: "-8%", xl: "-5%" },
      left: 903,
      paddingBottom: { lg: "10px", xl: "20px" },
    },
  ];

  const [style, setStyle] = useState();

  let [backgroundSize, setbackgroundSize] = useState(0);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
          {
            threshold: 0.7,
        }
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer, isIntersecting]);

    return isIntersecting;
  }

  const isInViewport1 = useIsInViewport(ref1);
  var lastScrollTop = 0;

  useEffect(() => {

      window.addEventListener("scroll", () => {
        console.log('BckgroundSize ' + backgroundSize );

        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop ) {
          console.log('down Scrolling')
          if (isInViewport1) {
            setbackgroundSize((backgroundSize += 3));
            setStyle({
              background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
              backgroundSize: `${backgroundSize}px 55px`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `left 100%`,
            });

            if(backgroundSize>110 && backgroundSize<289){
              setRoadMapData(stepsData2);
            }
          }
        } else if (st < lastScrollTop) {
          console.log('Up Scrolling')
          if (isInViewport1) {
            if (backgroundSize >= 3) {
              setbackgroundSize((backgroundSize -= 3));
              setStyle({
                background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
                backgroundSize: `${backgroundSize}px 55px`,
                backgroundRepeat: "no-repeat",
                transition: 'width 2s',

                backgroundPosition: `left 100%`,
              });

              if(backgroundSize<110 && backgroundSize<289){
                setRoadMapData(stepsData1);
              }
            }else{
              setbackgroundSize((backgroundSize = 0));
              setStyle({
                background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
                backgroundSize: `${backgroundSize}px 55px`,
                backgroundRepeat: "no-repeat",
                transition: 'width 2s',
                backgroundPosition: `left 100%`,
              });
            }
          }
        } // else was horizontal scroll

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      }, false);




      // setbackgroundSize((backgroundSize +=3));
      // setStyle({
      //   background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
      //   backgroundSize: `${backgroundSize}px 55px`,
      //   backgroundRepeat: "no-repeat",
      //   transition: "ease-in-out 2s",
      //   backgroundPosition: `left 100%`,
      // });




  },[isInViewport1]);







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
            >
              <Grid item lg={6}>
                <Typography
                  color="#ffffff"
                  fontSize="46px"
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
                >
                  Metastate will be build in 5 Phases. Download
                  <br />
                  the whitepaper for more information
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
                  sx={style}
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
                  {stepsData.map((item, index) => (
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        borderLeft: "2px solid #f2f2f2",
                        // linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)
                        borderImage: `linear-gradient(180deg, #0092FF 24%,  #42E3FF 60%, #fff 100%) 1`,
                        width: "245px",
                        padding: "5px",
                        position: "absolute",
                        top: item.top,
                        left: item.left,
                        paddingBottom: item.paddingBottom,
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
                        color="#ffffff"
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
          </Container>
        </Box>
      </>
    </div>
  );
};

export default Roadmap;
