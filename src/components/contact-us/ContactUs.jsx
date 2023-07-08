import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bgNetRev from "../../assets/images/BG-net-reversed.png";
import Button from "../button/Button";
import { ArrowRightAlt } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box pt={6}>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            backgroundImage: `url(${bgNetRev})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "75% 78%",
            backgroundPosition: "left top",
          }}
        >
          <Grid item lg={5} width="38%">
            <Grid mt={8}>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={46}
                fontWeight={500}
              >
                Anything left unanswered?
              </Typography>
              <Typography
                color="#ffffff"
                fontFamily="Montserrat"
                fontSize={18}
                fontWeight={600}
              >
                Join our Discord channel or
                <br />
                contact us for more information!
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              mt={6}
              spacing={2}
            >
              <Grid item>
                <a href="https://discord.gg/9nUEkWbZ5h" target="_blank">
                <Button btnText="join discord" btnEndIco={<ArrowRightAlt />} />
                </a>
              </Grid>
              <Grid item>
                <Button btnText="contact" btnEndIco={<ArrowRightAlt />} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
