import React from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ReactComponent as MetastateLogo } from "../../assets/images/metastate-logo.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/Wallet.svg";

import Button from "../button/Button";

const Appbar = (props) => {
  const { windows, home, intro, benefits, roadmap, getAccess } = props;

  const menuItems = [
    { name: "home", link: () => home() },
    { name: "intro", link: () => intro() },
    { name: "benefits", link: () => benefits() },
    { name: "get access", link: () => getAccess() },
    { name: "roadmap", link: () => roadmap() },
  ];

  return (
    <>
      <AppBar sx={{ background: "#07080D", py: 2 }}>
        <CssBaseline />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft={8}

          >
            <Grid item xs={4} md={3} lg={2}>
              <a href="#">
                <MetastateLogo width="100%" height="auto" length="auto" />
              </a>
            </Grid>
            <Grid item md={6} lg={7} display={{ xs: "none", md: "flex" }}>
              <Grid
                container
                direction="row"
                justifyContent="right"
                alignItems="center"
                spacing={3}
              >
                {menuItems.map((item, index) => (
                  <>
                    <Grid item key={index}>
                      <a style={{ color: "#ffffff", textDecoration: "none", cursor: "pointer" }}>
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            "&:hover": { color: "#0294FF" },
                          }}
                          onClick={item.link}
                        >
                          {item.name}
                        </Typography>
                      </a>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} display={{ xs: "none", md: "flex" }}>
              {/* <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item pr={1}>
                  <Button variant="gradient" btnLink="#" btnText="Login" />
                </Grid>
                <Grid item pl={1}>
                  <Button
                    variant=""
                    btnLink="#"
                    btnText="Connect Wallet"
                    btnEndIco={<WalletIcon />}
                  />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
      </AppBar>
    </>
  );
};

export default Appbar;
