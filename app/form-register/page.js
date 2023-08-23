"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Import Images
import logo from "@/app/images/logo.png";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="section-area account-wraper2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="appointment-form form-wraper">
                  <div className="logo">
                    <img src={logo.src} alt="" />
                  </div>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div
                        href="/"
                        type="button"
                        className="btn btn-primary w-100 radius-xl"
                      >
                        Register Now
                      </div>
                    </div>
                    <div className="text-center mt-40">
                      <p className="mt-0">Already have an account?</p>
                      <div
                        className="btn btn-lg btn-secondary w-100"
                        data-toggle="tab"
                        href="/form-login"
                      >
                        Login
                      </div>
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
}

export default FormLogin;
