import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bgNetRev from "../../assets/images/BG-net-reversed.png";
import bgNetRevMob from "../../assets/images/bg-net-reversed-mob.png";
import Button from "../button/Button";
import { ArrowRightAlt } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box pt={{ md: 6 }}>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems={{ md: "flex-end" }}
          sx={{
            backgroundImage: {
              xs: `url(${bgNetRevMob})`,
              md: `url(${bgNetRev})`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: "95% 82%", md: "75% 78%" },
            backgroundPosition: "left top",
          }}
        >
          <Grid item lg={5} width={{ xs: "90%", md: "38%" }}>
            <Grid mt={{ xs: 8, md: 8 }} pl={{ xs: 2, md: 0 }}>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={{ xs: 30, md: 46 }}
                fontWeight={500}
              >
                Anything left unanswered?
              </Typography>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={16}
                fontWeight={400}
                display={{ xs: "flex", md: "none" }}
              >
                Join our Discord channel or contact us for more information!
              </Typography>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={18}
                fontWeight={600}
                display={{ xs: "none", md: "flex" }}
              >
                Join our Discord channel or
                <br />
                contact us for more information!
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="center"
              mt={{ xs: 0, md: 6 }}
              spacing={2}
            >
              <Grid item>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://discord.gg/9nUEkWbZ5h"
                  target="_blank"
                >
                  <Button
                    btnText="join discord"
                    btnEndIco={<ArrowRightAlt />}
                  />
                </a>
              </Grid>
              <Grid item>
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:info@metastateproperties.io"
                >
                  <Button btnText="contact" btnEndIco={<ArrowRightAlt />} />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
