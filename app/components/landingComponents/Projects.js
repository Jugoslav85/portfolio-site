import React from "react";
import { Link } from "react-router-dom";

const myProjects = [
  { title: "Tourist Destinations", image: "/src/img/house.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "1" },
  { title: "Travel Devotion", image: "/src/img/house1.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "2" },
  { title: "My Awesome Blog", image: "/src/img/house2.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "3" },
  { title: "Creative Resume Templates", image: "/src/img/house3.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "4" },
  { title: "Fake Grass", image: "/src/img/house4.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "5" },
  { title: "Shopify Theme Locator", image: "/src/img/house1.jpg", body: "Travel blog designed and developed in Wordpress", buttonUrl: "/portfolio", key: "6" },
];

function Projects() {
  return (
    <div className="container mt-3">
      <h5 className="card-title">MY PROJECTS</h5>
      <hr />
      <div className="row d-flex justify-content-between">
        {myProjects.map(function (project) {
          return (
            <div className="col-lg-4 mb-4 mx-auto mx-sm-0">
              <div className="card" id="card_sponsor">
                <div className="card-body">
                  <div className="row p-2">
                    <div className="col-12">
                      <h5>{project.title}</h5>
                      <div className="d-flex text-center">
                        <img className="img-thumbnail img-fluid" src={project.image} />
                      </div>
                      <hr />
                      <p className="">{project.body}</p>
                      <Link to={project.buttonUrl} id="landingBackground" className="btn btn-block text-white">
                        Take Action!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
