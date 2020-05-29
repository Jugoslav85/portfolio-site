import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div id="landingBackground" className="d-flex justify-content-center row text-white pt-5 pb-5">
      <div className="container mx-2 text-center">
        <h1 className="text-center display-3">Hey, I’m Jugoslav.</h1>
        <br />
        <h4>Web designer and developer from Brighton, UK. </h4>
        <h4>I create custom websites to help businesses do better online.</h4>
        <div className="col text-center pt-3">
          <Link to="/about-me" type="button" className="btn btn-primary btn-lg text-center mt-3">
            My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
