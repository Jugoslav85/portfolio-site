import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import Me from "./ContactForm/Me";
import Page from "./Page";

function About() {
  return (
    <>
      <Page title="About Me">
        <div id="landingBackground" className="jumbotron text-center">
          <h1 className="jumbotron-heading text-white ">ABOUT ME</h1>
        </div>
        <div className="container d-flex justify-content-between">
          <div className="row">
            <div className="col-12 px-4 px-sm-2 col-lg-8 py-2 text-justify">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, quasi dolorem beatae ullam repudiandae adipisci aut eos doloribus, molestias eaque voluptatem vero optio. Animi dolor rerum ad corporis delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime quasi nemo adipisci nulla excepturi eaque. Enim, voluptate iste quia labore dolorum, aliquam autem minima nihil tempore numquam, dignissimos mollitia.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, quasi dolorem beatae ullam repudiandae adipisci aut eos doloribus, molestias eaque voluptatem vero optio. Animi dolor rerum ad corporis delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime quasi nemo adipisci nulla excepturi eaque. Enim, voluptate iste quia labore dolorum, aliquam autem minima nihil tempore numquam, dignissimos mollitia.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, quasi dolorem beatae ullam repudiandae adipisci aut eos doloribus, molestias eaque voluptatem vero optio. Animi dolor rerum ad corporis delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime quasi nemo adipisci nulla excepturi eaque. Enim, voluptate iste quia labore dolorum, aliquam autem minima nihil tempore numquam, dignissimos mollitia.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, quasi dolorem beatae ullam repudiandae adipisci aut eos doloribus, molestias eaque voluptatem vero optio. Animi dolor rerum ad corporis delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime quasi nemo adipisci nulla excepturi eaque. Enim, voluptate iste quia labore dolorum, aliquam autem minima nihil tempore numquam, dignissimos mollitia.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, quasi dolorem beatae ullam repudiandae adipisci aut eos doloribus, molestias eaque voluptatem vero optio. Animi dolor rerum ad corporis delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime quasi nemo adipisci nulla excepturi eaque. Enim, voluptate iste quia labore dolorum, aliquam autem minima nihil tempore numquam, dignissimos mollitia.</p>
            </div>
            <div className="col-12 col-lg-4 py-2 text-justify">
              <Me />
              <ContactForm />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default About;
