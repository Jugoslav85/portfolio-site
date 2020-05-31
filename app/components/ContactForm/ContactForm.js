import React from "react";

function ContactForm() {
  return (
    <>
      <div className="container mx-auto px-0 pb-5">
        <div className="row ">
          <div className="col">
            <div id="contactForm" className="card">
              <div id="landingBackground" className="card-header text-white">
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
                  </div>
                  <div className="form-group">
                    <label forhtml="message">Message</label>
                    <textarea className="form-control" id="message" rows="6" required></textarea>
                  </div>
                  <div className="mx-auto">
                    <button id="landingBackground" type="submit" className="btn text-white text-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
