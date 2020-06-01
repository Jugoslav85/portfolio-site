import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Page from "./Page";

function Contact() {
  return (
    <>
      <Page title="Contact me">
        <section id="landingBackground" className="jumbotron text-center text-white">
          <div className="container">
            <h1 className="jumbotron-heading">CONTACT ME</h1>
            <p className="lead text-muted mb-0">If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.</p>
          </div>
        </section>
        <ContactForm />
      </Page>
    </>
  );
}

export default Contact;
