import React from "react";
import Projects from "./landingComponents/Projects";
import Page from "./Page";

function ProjectsPage() {
  return (
    <>
      <Page title="My Projects">
        <div id="landingBackground" className="jumbotron text-center">
          <h1 className="jumbotron-heading text-white ">PORTFOLIO</h1>
        </div>
        <div className="container d-flex justify-content-between"></div>
        <Projects />;
      </Page>
    </>
  );
}

export default ProjectsPage;
