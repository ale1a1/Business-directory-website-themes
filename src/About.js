import React, { Fragment } from "react";
import AboutContentModal from "./AboutContentModal";
import aboutImage from './assets/krakenimages-376KN_ISplE-unsplash.jpg';
import "./style.css";

const About = () => {
  return (
    <Fragment>
      <section id="About" className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="font-monospace my-5">About Us!</h4>
            <h2 className="display-1">
            We help businesses grow since 2008.
            </h2>
          </div>
        </div>
        <div
          className="card border-0 my-3 text-white bg-info mx-auto"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={aboutImage}
                alt="aboutimg"
                className="card-img-top"
                loading="lazy"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body mt-3 p-2 text-center">
                <h5 className="card-title fs-5 font-monospace">Who we are</h5>
                <p className="card-text fs-1 mt-3">
                  We keep things simple, putting you in control so you can make
                  informed choices
                </p>
                <button
                  className="btn btn-light mt-3 shadow"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#aboutModal"
                >
                  What WE D
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Learn more..."
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutContentModal />
    </Fragment>
  );
};

export default About;
