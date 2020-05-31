import React from "react";
import Projects from "./landingComponents/Projects";

function ProjectsPage() {
  return (
    <>
      <div id="landingBackground" className="jumbotron text-center">
        <h1 className="jumbotron-heading text-white ">PORTFOLIO</h1>
      </div>
      <div className="container d-flex justify-content-between"></div>
      <Projects />;
    </>
  );
}

export default ProjectsPage;
