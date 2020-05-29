import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./landingComponents/Welcome";
import Projects from "./landingComponents/Projects";
import FeaturedProject from "./landingComponents/FeaturedProject";
import Quote from "./landingComponents/Quote";

function Landing() {
  return (
    <>
      <Welcome />
      <FeaturedProject />
      <Projects />
      <Quote />
    </>
  );
}

export default Landing;
