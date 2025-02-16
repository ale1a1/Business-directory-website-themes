import React, { Fragment } from "react";
import GetStartedModal from "./GetStartedModal";
import "./style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="vh-100 headerBackground">
        <div className="container mt-5 pt-5 h-25">
          <h4 className="text-light font-monospace text-shadow animate-text-right mt-4 ps-3 cssBold">
            Financial Planing For Life
          </h4>
          <h1 className="display-2 rounded animate-text-right-3s mt-4 ps-3">
            Trusted to guide entrepreneurs in making better financial decisions.
          </h1>
          <button
            className="btn btn-lg btn-info shadow mt-4 animate-text-right-5s cssBold ms-3 getOffer-btn"
            data-bs-toggle="modal"
            data-bs-target="#getOffer"
          >
            Get offer
          </button>
        </div>
        <GetStartedModal />
      </header>
    </Fragment>
  );
};

export default Header;
