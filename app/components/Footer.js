import React from "react";

function Footer() {
  return (
    // <!-- Footer -->
    <footer id="landingBackground" className="page-footer font-small bg-dark text-white pt-4">
      {/* <!-- Footer Elements --> */}
      <div className="container">
        {/* <!-- Social buttons --> */}
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
        {/* <!-- Social buttons --> */}
      </div>
      {/* <!-- Footer Elements --> */}

      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">© 2020 Copyright | Developed by Jugoslav Spasevski</div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}

export default Footer;
