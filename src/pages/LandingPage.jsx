import React from "react";
import { Box, Grid } from "@mui/material";
import Appbar from "../components/appbar/Appbar";
import HeroSection from "../components/hero-section/HeroSection";
import BuyRealEstate from "../components/buy-real-estate/BuyRealEstate";
import Benifits from "../components/benefits/Benifits";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact-us/ContactUs";
import GetAccess from "../components/get-access/GetAccess";
// import Appbar from "../components/Appbar";

const LandingPage = () => {
  return (
    <>
      <Box sx={{ background: "#07080D" }}>
        <Appbar />
        <HeroSection />
        <BuyRealEstate />
        <Benifits />
        <GetAccess />
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
