import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <!--- Navbar --->
    <nav id="landingBackground" className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <i className="fa fa-graduation-cap fa-lg mr-2"></i>Jugoslav Spasevski
        </Link>
        <button className="navbar-toggler navbar-white" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
          <span id="toggleIcon" className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nvbCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pl-1">
              <Link className="nav-link" to="/">
                <i className="fa fa-home fa-fw mr-1"></i>Home
              </Link>
            </li>
            <li className="nav-item pl-1">
              <Link className="nav-link" to="/about-me">
                <i className="fa fa-info-circle fa-fw mr-1"></i>About me
              </Link>
            </li>
            <li className="nav-item pl-1">
              <Link className="nav-link" to="/contact">
                <i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact
              </Link>
            </li>
            <li className="nav-item pl-1">
              <Link className="nav-link" to="/portfolio">
                <i className="fa fa-user-plus fa-fw mr-1"></i>Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <!--# Navbar #-->
  );
}

export default Header;
