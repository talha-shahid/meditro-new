"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import circleOrange2 from "../../images/shap/circle-orange-2.png";

class testimonialSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="section-area section-sp3 testimonial-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Testimonial</h6>
              <h2 className="title m-b0">
                See What Are The Patients <br />
                Saying About us
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className="thumb-wraper">
                  <img className="bg-img" src={testShape.src} alt="" />
                  <ul>
                    <li data-member="1">
                      <div href="#">
                        <img src={testPic1.src} alt="" />
                      </div>
                    </li>
                    <li data-member="2">
                      <div href="#">
                        <img src={testPic2.src} alt="" />
                      </div>
                    </li>
                    <li data-member="3">
                      <div href="#">
                        <img src={testPic3.src} alt="" />
                      </div>
                    </li>
                    <li data-member="4">
                      <div href="#">
                        <img src={testPic4.src} alt="" />
                      </div>
                    </li>
                    <li data-member="5">
                      <div href="#">
                        <img src={testPic5.src} alt="" />
                      </div>
                    </li>
                    <li data-member="6">
                      <div href="#">
                        <img src={testPic6.src} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Slider {...settings} className="testimonial-slide">
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={plusOrange.src} alt="" />
          <img className="pt-img2 animate2" src={squareBlue.src} alt="" />
          <img className="pt-img3 animate3" src={circleDots.src} alt="" />
          <img className="pt-img4 animate4" src={circleOrange2.src} alt="" />
        </section>
      </>
    );
  }
}

export default testimonialSection;
