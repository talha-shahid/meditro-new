"use client";

import React from "react";
// import {Link} from 'react-router-dom';
import { Accordion } from "react-bootstrap";

//Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
import servicesPic1 from "@/app/images/services/pic1.jpg";
import pdf from "@/app/images/icon/pdf.png";
import doc from "@/app/images/icon/doc.png";

import services from "../services.json";

function compare(params) {
  function findServiceBySlug(slug) {
    return services.find((service) => service.slug === slug);
  }
  // Find the blog service using the slug from the URL
  const matchedService = findServiceBySlug(params.slug);
  return matchedService;
}

function ServiceDetail({ params }) {
  const service = compare(params);

  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${bnrImg1.src})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Service {params.slug}</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
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
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/services">Service</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Service Details
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue.src} alt="" />
            <img className="pt-img2 animate2" src={circleDots.src} alt="" />
            <img className="pt-img3 animate-rotate" src={plusBlue.src} alt="" />
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-30">
                <div className="ttr-media mb-30">
                  <img src={servicesPic1.src} className="rounded" alt="" />
                </div>
                <div className="clearfix">
                  <div className="head-text mb-30">
                    <h2 className="title mb-15">{service.title}</h2>
                    <p className="mb-0">{service.content}</p>
                  </div>
                  {/* <div className="row align-items-center">
                    <div className="col-md-6 mb-30">
                      <ul className="list-check-squer mb-0">
                        <li>Then along come two they</li>
                        <li>That’s just a little bit more than</li>
                        <li>Standard dummy text ever since</li>
                        <li>Simply dummy text of the printing</li>
                        <li>Make a type specimen book</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="skillbar-box mb-30">
                        <h6 className="title">Advanced Technology</h6>
                        <div className="skillbar appear">
                          <p
                            className="skillbar-bar"
                            style={{ width: "96%" }}
                          ></p>
                          <span className="skill-bar-percent">96%</span>
                        </div>
                      </div>
                      <div className="skillbar-box mb-30">
                        <h6 className="title">Certified Engineers</h6>
                        <div className="skillbar appear">
                          <p
                            className="skillbar-bar"
                            style={{ width: "79%" }}
                          ></p>
                          <span className="skill-bar-percent">79%</span>
                        </div>
                      </div>
                      <div className="skillbar-box mb-0">
                        <h6 className="title">6 years Experience</h6>
                        <div className="skillbar appear">
                          <p
                            className="skillbar-bar"
                            style={{ width: "75%" }}
                          ></p>
                          <span className="skill-bar-percent">75%</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div>
                    <div className="head-text mb-30">
                      {/* <h4 className="title mb-10">It Includes</h4> */}
                      {/* {blog.content.split("\n").map((service, index) => (
                        <p key={index}>{service.service_1}</p>
                      ))} */}
                      {/* {{ service }.map((service, index) => (
                        <ol>
                          <li>{service.services.service_1}</li>
                        </ol>
                      ))} */}
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="head-text mb-30">
                    <h4 className="title mb-10">Popular Questions</h4>
                    <p className="mb-0">
                      Standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion ttr-accordion1"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How Doctor Can Ease Your Pain?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How do I withdraw from a subject?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Understand Doctor Before You Regret?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        What types of systems do you support?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        We Teach You How To Feel Better?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        How Can I Contact You?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sticky-top pb-1">
                  <div className="widget">
                    <ul className="service-menu">
                      <li className="active">
                        <a href="/service-detail">
                          <span>Engine Diagnostics</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/service-detail">
                          <span>Lube Oil and Filters</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/service-detail">
                          <span>Belts and Hoses</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/service-detail">
                          <span>Air Conditioning</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/service-detail">
                          <span>Brake Repair</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/service-detail">
                          <span>Tire and Wheel Services</span>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="widget">
                    <div className="brochure-bx">
                      <h5 className="title-head">Download</h5>
                      <div href="#" className="download-link">
                        <img src={pdf.src} alt="" />
                        <h5 className="title">Download our Brochures</h5>
                        <span>Download</span>
                      </div>
                      <div href="#" className="download-link">
                        <img src={doc.src} alt="" />
                        <h5 className="title">Our Company Details</h5>
                        <span>Download</span>
                      </div>
                    </div>
                  </div> */}
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServiceDetail;
