"use client";

import React from "react";
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/App.scss";
import FeatureSection3 from "@/app/markup/elements/feature-section3";
import TeamSection from "@/app/markup/elements/team";
import LatestNewsSection from "@/app/markup/elements/latest-news-slider";
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
//react icons import
import { GoChecklist } from "react-icons/go";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiDnaLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineAudit } from "react-icons/ai";
import Link from "next/link";

// import services from "./services.json";

function Specialities() {
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
                <h1>Specialities</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
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
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Specialities
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
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <GoChecklist
                        size={80}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Anesthesiology</h3>
                    <p>
                      Promedix ensures affordable government and commercial
                      payer credentialing, expanding provider networks and
                      ensuring financial stability.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature2"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <CiMoneyCheck1
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Cardiology</h3>
                    <p>
                      Promedix offers complete range of medical billing
                      services, including scheduling, eligibility checks,
                      claims, payment management, and financial reporting.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature3"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <PiDnaLight
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Chiropractics</h3>
                    <p>
                      Count on Promedix for precise medical coding, consistently
                      meeting industry standards and CMS guidelines with
                      exceptional accuracy and reliability.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature2"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <TfiComments
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Dermatology</h3>
                    <p>
                      Promedix expertly manages scheduling, referrals,
                      authorizations, and insurance verifications, significantly
                      enhancing the overall patient experience. (Included with
                      billing contract for convenience)
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature3"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <LiaFileInvoiceDollarSolid
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">
                      DME (Durable Medical Equipment)
                    </h3>
                    <p>
                      Elevate your practice's revenue potential with
                      PremierMedix Billing Solutions. Streamline processes,
                      maximize payments, and focus on patient care while we
                      expertly manage the administrative workload.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Endocrinology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">ENT (Ear, Nose & Throat)</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Family & General Practice</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Gastroenterology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Internal Medicine</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">
                      Independent Diagnostic Facility
                    </h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Neurology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">OB – GYN</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Oncology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Podiatry</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Podiatry</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Pain Management</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Pathology Lab</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Pediatrics</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Pulmonary Disease</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Radiology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Urgent Care</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Nephrology</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "31.5rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <AiOutlineAudit
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Home Health</h3>
                    <p>
                      Get a free Practice Audit to identify the shortcomings and
                      gaps in your practice. Receive a comprehensive report,
                      along with revenue-boosting suggestions to enhance your
                      revenue.
                    </p>
                    <Link
                      href={`/specialities`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <FeatureSection3 /> */}

        {/* <TeamSection /> */}

        <LatestNewsSection />
      </div>
    </>
  );
}

export default Specialities;
