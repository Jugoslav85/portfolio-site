import React from "react";

function Quote() {
  return (
    <div id="landingBackground" className="d-flex justify-content-around row text-white pb-5 mb-5">
      <div className="container col-lg-5 mb-lg-5 mx-3 mx-sm-0 text-center">
        <p id="quote" className=" display-4 pt-4 mt-5">
          Lets work together
        </p>
        <p id="connect" className="h4">
          You have a project you would like to discuss?
        </p>
        <button id="quote" type="button" className="mt-4 btn btn-outline-light btn-lg">
          Get in touch
        </button>
      </div>
      <div className="container col-lg-5 mb-5 mx-3 mx-sm-0 mt-lg-5 pt-5 text-center text-lg-left">
        <ul id="connect" className="list-group-flush">
          <li className=" py-2">
            <i className="fab fa-react"></i>&nbsp; jugoslav34@gmail.com
          </li>
          <li className="py-2">
            <i className="fab fa-node-js"></i>&nbsp; Via GitHub
          </li>
          <li className="py-2">
            <i className="fas fa-bold"></i>&nbsp; Via LinkedIn
          </li>
          <li className="py-2">
            <i className="fas fa-bold"></i>&nbsp; Via Facebook
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quote;
