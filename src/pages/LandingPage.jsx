import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";
import Appbar from "../components/appbar/Appbar";
import HeroSection from "../components/hero-section/HeroSection";
import BuyRealEstate from "../components/buy-real-estate/BuyRealEstate";
import Benifits from "../components/benefits/Benifits";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact-us/ContactUs";
import GetAccess from "../components/get-access/GetAccess";
import Roadmap from "../components/roadmap/Roadmap";
import BecomeInvestor from "../components/become-investor/BecomeInvestor";

const LandingPage = () => {
  const home = useRef();
  const scrollHome = (e) => e.current.scrollIntoView();
  const homeSection = () => scrollHome(home);

  const intro = useRef();
  const scrollIntro = (e) => e.current.scrollIntoView();
  const introSection = () => scrollIntro(intro);

  const benefits = useRef();
  const scrollBenefits = (e) => e.current.scrollIntoView();
  const benefitsSection = () => scrollBenefits(benefits);

  const getAccess = useRef();
  const scrollGetAccess = (e) => e.current.scrollIntoView();
  const getAccessSection = () => scrollGetAccess(getAccess);

  const roadmap = useRef();
  const scrollRoadmap = (e) => e.current.scrollIntoView();
  const roadmapSection = () => scrollRoadmap(roadmap);

  return (
    <>
      <Box sx={{ background: "#07080D" }}>
        <div ref={home}>
          <Appbar
            home={homeSection}
            intro={introSection}
            benefits={benefitsSection}
            roadmap={roadmapSection}
            getAccess={getAccessSection}
          />
        </div>
        <HeroSection />
        <div ref={intro}>
          <BuyRealEstate />
        </div>
        <div ref={benefits}>
          <Benifits />
        </div>
        <div ref={roadmap}>
          <Roadmap />
        </div>
        <div ref={getAccess}>
          <GetAccess />
        </div>
        <BecomeInvestor />
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
