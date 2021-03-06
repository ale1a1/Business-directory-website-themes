import React, { Fragment } from "react";
// import "./style.css"

const EmailOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-bottom bg-primary"
        tabIndex="-1"
        id="email"
        aria-labelledby="offcanvasEmaillabel"
        style={{ height: "62.5vh" }}
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title text-light" id="offcanvasEmaillabel">
            Email
          </h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex w-75 flex-column m-auto">
          <form
            className="w-100"
            action="https://formsubmit.co/ale1a1@libero.it"
            // action="https://formsubmit.co/ale1a184@gmail.com"
            // action="5964a354b4e9ce4590aee2448b7b8c24"
            method="POST"
          >
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="First name"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="Second name"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div>
              <div className="col-lg row-sm emailField">
                <input
                  type="email"
                  name="Email address"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="email"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <textarea
                  type="text"
                  name="message"
                  className="w-100"                 
                  placeholder="Write a message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-outline-light mt-3 w-100"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailOffCanvas;
