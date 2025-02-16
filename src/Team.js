import React, { Fragment } from "react";
import profile1 from './assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg';
import profile2 from './assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg';
import profile3 from './assets/willian-souza-p5BoBF0XJUA-unsplash.jpg';
import profile4 from './assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg';


import "./style.css";

const Team = () => {
  return (
    <Fragment>
      <section className="container mb-5 pt-4" id="Team">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="font-monospace my-5">Our Expert Team</h4>
            <h2 className="display-1">
              Meet our expert finance executive team.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-5 mb-sm-3">
            <div className="card shadow">
              <img
                src={[profile1]}
                alt=""
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5 mb-sm-3">
            <div className="card shadow">
              <img
                src={[profile2]}
                alt=""
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5 mb-sm-3">
            <div className="card shadow">
              <img
                src={[profile3]}
                alt=""
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-5 mb-sm-3">

            <div className="card shadow">
              <img
                src={[profile4]}
                alt=""
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
