import React from "react";
import { Link } from "react-router-dom";

function Me() {
  return (
    <>
      <div>
        <div className="image-flip">
          <div className="mainflip flip-0">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img className=" img-fluid" src="https://www.tx2.fr/wp-content/uploads/2018/11/avatar_jeune_homme_lunettes_developpeur_geek.jpg" alt="card image" />
                  </p>
                  <h4 className="card-title">Jugoslav Spasevski</h4>
                  <p className="card-text">Web Developing apps and websites in React JS</p>
                  <Link id="landingBackground" to="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm">
                    <i className="fa fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">Sunlimetech</h4>
                  <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link className="social-icon text-xs-center" target="_blank" to="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="social-icon text-xs-center" target="_blank" to="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="social-icon text-xs-center" target="_blank" to="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="social-icon text-xs-center" target="_blank" to="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
