import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as BulletIco } from "../../assets/images/bullet-point.svg";
import learnMoreBtn from "../../assets/images/learn-more.png";

const Benifits = () => {
  const investorBenefits = [
    {
      heading: "Real Estate Investment Opportunities",
      details:
        "With Metastate, investors gain access to a global real estate investment market. They can acquire tokens representing fractions of properties, diversifying their investment portfolios and participating in a sector that historically had high entry barriers.",
    },
    {
      heading: "Yield Generation through Staking",
      details:
        "Investors can also benefit from staking on the Metastate platform. By locking their tokens, they have the opportunity to earn passive income proportional to the number of tokens staked. This provides an additional income stream alongside the potential appreciation of real estate assets.",
    },
    {
      heading: "Access to a Traditionally Restricted Market",
      details:
        "Metastate removes traditional restrictions in the real estate market, allowing investors from different parts of the world to participate in property investments. This expands investment opportunities and enables investors to diversify their portfolios geographically.",
    },
  ];
  const ownersBenefits = [
    {
      heading: "Enhanced Liquidity",
      details:
        "By tokenizing their properties on the Metastate platform, property owners gain access to a global market of investors interested in acquiring fractional ownership. This increased liquidity provides property owners with more flexibility in managing their assets and potentially unlocking additional value.",
    },
    {
      heading: "Passive Income Generation",
      details:
        "By locking their tokens on the platform, property owners have the opportunity to earn passive income through staking. This means they can earn additional rewards based on the amount of tokens they hold and stake on the network.",
    },
    {
      heading: "Transparency and Security",
      details:
        "Metastate offers transparency and security to property owners. Through the use of smart contracts and blockchain technology, all transactions are recorded and stored immutably. This reduces the risk of fraud and ensures that property owners can verify the authenticity of transactions.",
    },
  ];

  return (
    <>
      <Box mt={8}>
        <Container>
          <Grid
            container
            direction="row"
            sx={{
              borderTop: "1px solid #ffffff",
              borderBottom: "1px solid #ffffff",
            }}
          >
            <Grid item lg={6} py={4} sx={{ borderRight: "1px solid #ffffff" }}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                px={4}
              >
                <Grid item width="100%">
                  <Typography
                    color="#ffffff"
                    fontFamily="Montserrat"
                    fontSize={34}
                    fontWeight={500}
                  >
                    Benefits for
                    <br />
                    Investors
                  </Typography>
                </Grid>
                <Grid item mt={1}>
                  {investorBenefits.map((item, index) => (
                    <div style={{ marginTop: "15px" }}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={4}
                        key={index}
                        pr={2}
                      >
                        <Grid item xs={1}>
                          <BulletIco width="24" />
                        </Grid>
                        <Grid item xs={11}>
                          <Typography
                            color="#ffffff"
                            fontSize={17}
                            fontWeight={500}
                            fontFamily="Montserrat"
                          >
                            {item.heading}
                          </Typography>
                          <Typography
                            mt="3px"
                            color="#ffffff"
                            fontSize={12}
                            fontWeight={400}
                            fontFamily="Montserrat"
                            textAlign="justify"
                          >
                            {item.details}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} py={4}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                px={4}
              >
                <Grid item width="100%">
                  <Typography
                    color="#ffffff"
                    fontFamily="Montserrat"
                    fontSize={34}
                    fontWeight={500}
                  >
                    Benefits for Property
                    <br />
                    Owners
                  </Typography>
                </Grid>
                <Grid item mt={1}>
                  {ownersBenefits.map((item, index) => (
                    <div style={{ marginTop: "15px" }}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={4}
                        key={index}
                        pr={2}
                      >
                        <Grid item xs={1}>
                          <BulletIco width="24" />
                        </Grid>
                        <Grid item xs={11}>
                          <Typography
                            color="#ffffff"
                            fontSize={17}
                            fontWeight={500}
                            fontFamily="Montserrat"
                          >
                            {item.heading}
                          </Typography>
                          <Typography
                            mt="3px"
                            color="#ffffff"
                            fontSize={12}
                            fontWeight={400}
                            fontFamily="Montserrat"
                            textAlign="justify"
                          >
                            {item.details}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #ffffff"
            sx={{ paddingY: "1px" }}
          >
            <Grid item xs={10}>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={34}
                fontWeight={500}
              >
                Get the whitepaper for more details
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="right">
              <a href="#">
                <img src={learnMoreBtn} width="50%" />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Benifits;
