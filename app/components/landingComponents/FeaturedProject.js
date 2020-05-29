import React from "react";
import { Link } from "react-router-dom";

function FeaturedProject() {
  return (
    <div className="container pt-4">
      <h5 className="card-title">FEATURED PROJECT</h5>
      <hr />
      <div className="row">
        <div className="col-lg-7 mb-5 mx-3 mx-sm-0 py-3 bg-light">
          <div id="featured" className="card">
            <div className="card-body">
              <div className="imghove">
                <img src="https://zdnet1.cbsistatic.com/hub/i/r/2019/12/03/e356637b-183e-49e5-b5f3-9122be9fd18b/resize/1200x900/3a0c20f4c22749385fedb363379b6be1/istock-827896866.jpg" className="img-fluid" />
                <div className="overlay ctr">
                  <Link to="#!" className="mr-3 col-3 btn btn-light">
                    Visit site
                  </Link>
                  <Link to="#!" className="ml-3 col-3 btn btn-light">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mb-5 mx-3 mx-sm-0">
          <div id="featuredDescription" className="card">
            <h3 className="card-header h3">Tourist Destinations</h3>
            <div className="card-body">
              <h5 className="card-title">Web design blog focused on helping beginners with tutorials, videos, code snippets and freebies.</h5>
              {/* Used tools */}
              <ul className="list-items list-group list-group-flush">
                <li className=" list-group-item py-4">
                  <i className="fab fa-react"></i>&nbsp; REACT
                </li>
                <li className="list-group-item py-4">
                  <i className="fab fa-node-js"></i>&nbsp; NODE JS
                </li>
                <li className="list-group-item py-4">
                  <i className="fas fa-bold"></i>&nbsp; BOOTSTRAP
                </li>
              </ul>
            </div>
          </div>
          <button type="button" className="mt-3 btn btn-secondary btn-lg btn-block">
            Block level button
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
