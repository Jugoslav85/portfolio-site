import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./landingComponents/Welcome";
import Projects from "./landingComponents/Projects";
import FeaturedProject from "./landingComponents/FeaturedProject";
import Quote from "./landingComponents/Quote";
import Page from "./Page";

function Landing() {
  return (
    <>
      <Page title="Home">
        <Welcome />
        <FeaturedProject />
        <Projects />
        <Quote />
      </Page>
    </>
  );
}

export default Landing;
