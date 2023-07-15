import React, { useState } from "react";
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { ReactComponent as MetastateLogo } from "../../assets/images/metastate-logo.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/Wallet.svg";
import metastateLogo from "../../assets/images/metastate-logo.png";

// import Button from "../button/Button";
import { Menu } from "@mui/icons-material";

const ModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "77%",
  bgcolor: "#000000",
  border: "1px solid #404040",
  borderRadius: 4,
  boxShadow: 24,
};

const Appbar = (props) => {
  const { windows, home, intro, benefits, roadmap, getAccess } = props;

  const menuItems = [
    // { name: "home", link: () => home() },
    { name: "intro", link: () => intro() },
    { name: "benefits", link: () => benefits() },
    { name: "get access", link: () => getAccess() },
    { name: "roadmap", link: () => roadmap() },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [activeSection, setActiveSection] = useState(false);
  const handleSection = (section) => {
    setActiveSection(section);
    handleCloseModal();
  };

  return (
    <>
      <AppBar sx={{ background: "#07080D", py: 2 }}>
        <CssBaseline />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          display={{ xs: "flex", md: "none" }}
          px={2}
        >
          <Grid item xs={1}>
            <IconButton onClick={handleOpenModal}>
              <Menu sx={{ color: "#ffffff" }} />
            </IconButton>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Box sx={ModalStyles} py={2} px={1}>
                <Container>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={1}
                    // borderBottom="1px solid #ffffff66"
                    // pb={2}
                  >
                    {menuItems.map((item, index) => (
                      <Grid item key={index}>
                        <Grid
                          py={2}
                          px={3}
                          sx={{
                            background:
                              activeSection === item.name
                                ? `linear-gradient(180deg, #131E26 0%, #243745 100%)`
                                : "",
                            borderRadius: 4,
                          }}
                        >
                          <a
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => handleSection(item.name)}
                          >
                            <Typography
                              sx={{
                                textTransform: "capitalize",
                                fontFamily: "Montserrat",
                                fontWeight: 400,
                              }}
                              onClick={item.link}
                            >
                              {item.name}
                            </Typography>
                          </a>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                  {/* <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    py={2}
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        sx={{
                          py: 1,
                          px: 2,
                          background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
                          borderRadius: 5,
                          color: "white",
                          fontFamily: "Montserrat",
                          fontWeight: "medium",
                          textTransform: "capitalize",
                        }}
                        onClick={handleCloseModal}
                      >
                        login
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          py: 1,
                          px: 2,
                          border: 1,
                          borderRadius: 5,
                          color: "white",
                          fontFamily: "Montserrat",
                          fontWeight: "medium",
                          textTransform: "capitalize",
                        }}
                        endIcon={<WalletIcon width={13} height={13} />}
                        onClick={handleCloseModal}
                      >
                        connect wallet
                      </Button>
                    </Grid>
                  </Grid> */}
                </Container>
              </Box>
            </Modal>
          </Grid>

          <Grid
            item
            xs={10} // change it to 7 when login button is shown
            px={1}
            textAlign="left"
          >
            <a href="#">
              <img
                src={metastateLogo}
                width="55%" // change it to 80 when login button is shown
                height="auto"
              />
            </a>
          </Grid>
          {/* <Grid item xs={3} textAlign="right">
            <Button
              sx={{
                py: 1,
                px: 2,
                background: `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`,
                borderRadius: 5,
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "medium",
                textTransform: "capitalize",
              }}
            >
              login
            </Button>
          </Grid> */}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft={8}
          display={{ xs: "none", md: "flex" }}
        >
          <Grid item md={3} lg={2}>
            <a href="#">
              <img src={metastateLogo} width="100%" height="auto" />
              {/* <MetastateLogo width="100%" height="auto" length="auto" /> */}
            </a>
          </Grid>
          <Grid item md={6} lg={10} paddingRight={8}>
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
                    <a
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
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
