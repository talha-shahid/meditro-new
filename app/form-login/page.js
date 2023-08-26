"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Import Images
import logo from "@/app/images/logo.png";

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";
import Link from "next/link";

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
                        className="btn mb-30 btn-lg btn-primary w-100"
                      >
                        login
                      </div>
                      <Link href="/form-forget-password" data-toggle="tab">
                        Forgot Password
                      </Link>
                    </div>
                    <div className="text-center mt-40">
                      <p className="mt-0">Dont have any account?</p>
                      <div
                        className="btn btn-lg btn-secondary w-100"
                        data-toggle="tab"
                        href="/form-register"
                      >
                        Register
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
