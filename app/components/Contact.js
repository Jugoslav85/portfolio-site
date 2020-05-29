import React from "react";

function Contact() {
  return (
    <>
      <section id="landingBackground" className="jumbotron text-center text-white">
        <div className="container">
          <h1 className="jumbotron-heading">CONTACT ME</h1>
          <p className="lead text-muted mb-0">If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.</p>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col">
            <div id="contactForm" className="card">
              <div className="card-header bg-primary text-white">
                <i className="fa fa-envelope"></i> Contact me.
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label forhtml="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                  </div>
                  <div className="form-group">
                    <label forhtml="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label forhtml="message">Message</label>
                    <textarea className="form-control" id="message" rows="6" required></textarea>
                  </div>
                  <div className="mx-auto">
                    <button type="submit" className="btn btn-primary text-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card bg-light mb-3">
              <div className="card-header bg-success text-white text-uppercase">
                <i className="fa fa-home"></i> Address
              </div>
              <div className="card-body">
                <p>3 rue des Champs Elysées</p>
                <p>75008 PARIS</p>
                <p>France</p>
                <p>Email : email@example.com</p>
                <p>Tel. +33 12 56 11 51 84</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
