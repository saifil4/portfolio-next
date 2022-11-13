import React from "react";
import Intro from "../components/layouts/intro";
import Work from "../components/layouts/work";
import ContactInfo from "../components/layouts/contact-info";
import Testimonials from "../components/layouts/testimonials";
import Skills from "../components/layouts/skills";
import Experience from "../components/layouts/experience";
import AppWrapper from "../components/AppWrapper";

const Home = () => {
  return (
    <AppWrapper>
      <Intro />
      <Work />
      <Skills />
      <Experience />
      <Testimonials />
      <ContactInfo />
    </AppWrapper>
  );
};

export default Home;

