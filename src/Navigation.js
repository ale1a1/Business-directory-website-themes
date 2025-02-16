import React, { Fragment } from "react";
import "./style.css";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand font-monospace" href="">
            Business Directory
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Navbar"
            aria-controls="Navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-uppercase" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#About">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#Team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navigation;
