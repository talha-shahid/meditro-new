"use client";

import React, { Component } from "react";
// import { Link } from "react-router-dom";

// Import Images
import bg1 from "../../images/background/line-bg1.png";
import ptImg1 from "../../images/shap/circle-orange.png";
import ptImg2 from "../../images/shap/plus-orange.png";
import ptImg3 from "../../images/shap/circle-dots.png";

class aboutSection extends Component {
  render() {
    return (
      <>
        <section
          className="section-area section-sp5 work-area"
          style={{
            backgroundImage: "url(" + bg1 + ")",
            backgroundRepeat: " no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        >
          <div className="container-sm">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Why Us ?</h6>
              <h2 className="title">Why Choose Us?</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                  <div className="work-num-bx">01</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10">
                      Revenue Cycle Experts
                    </h5>
                    <p>
                      Connect with our revenue cycle specialists, a highly
                      skilled team in medical billing, coding, and
                      credentialing, for substantial revenue enhancement in your
                      practice.
                    </p>
                  </div>
                  <a href="/booking" className="btn btn-primary light">
                    View More{" "}
                    <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx active">
                  <div className="work-num-bx">02</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10">Flexibility</h5>
                    <p>
                      We offer Medical Billing and Coding services to practices
                      of all sizes, from small clinics to large institutions,
                      with customizable packages to suit your requirements.
                    </p>
                  </div>
                  <a href="/services" className="btn btn-primary light">
                    View More{" "}
                    <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                  <div className="work-num-bx">03</div>
                  <div className="work-content">
                    <h5 className="title text-secondary mb-10">24/7 Support</h5>
                    <p>
                      Get round-the-clock support from our billing company's
                      dedicated team. Day or night, we're here to address
                      inquiries, resolve concerns, and offer guidance for
                      seamless operations and peace of mind.
                    </p>
                  </div>
                  <a href="/contact-us" className="btn btn-primary light">
                    View More{" "}
                    <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={ptImg1.src} alt="" />
          <img className="pt-img2 animate2" src={ptImg2.src} alt="" />
          <img className="pt-img3 animate3" src={ptImg3.src} alt="" />
        </section>
      </>
    );
  }
}

export default aboutSection;
