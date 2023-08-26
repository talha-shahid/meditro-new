"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";

class Error extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1.src + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Page Not Found</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <div href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </div>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Page Not Found
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue.src} alt="" />
              <img className="pt-img2 animate2" src={circleDots.src} alt="" />
              <img
                className="pt-img3 animate-rotate"
                src={plusBlue.src}
                alt=""
              />
            </div>
          </div>

          <section className="section-area section-sp2 error-404">
            <div className="container">
              <div className="inner-content">
                <h2 className="error-title">
                  4<span></span>4
                </h2>
                <h3 className="error-text">
                  The Page you were looking for, couldn't be found.
                </h3>
                <p>
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
                <div className="clearfix">
                  <div href="/" className="btn btn-primary m-r5">
                    Back
                  </div>
                  <div href="/" className="btn btn-primary">
                    Back To Home
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Error;
