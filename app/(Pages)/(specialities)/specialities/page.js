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
                  style={{ height: "26rem" }}
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
                      Anesthesiology: A Century of Excellence, Safeguarding
                      Patient Comfort, and Enhancing Well-being through Expert
                      Medical Care and Compassion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Cardiology: Advancing heart health, innovation, and
                      compassionate care for cardiovascular patients,
                      contributing to a healthier future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Chiropractics: Promoting wellness, spinal health, and
                      natural healing through skilled adjustments and
                      personalized care for optimal vitality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Dermatology: Nurturing skin health, beauty, and confidence
                      through expert care, innovative treatments, and
                      dermatological excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      DME: Providing reliable, quality medical equipment
                      solutions for enhanced mobility, independence, and
                      improved quality of life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Endocrinology: A century of expertise in hormones,
                      metabolism, and endocrine health, dedicated to holistic
                      well-being and wellness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      ENT: Caring for ear, nose, and throat health, offering
                      specialized treatments, and improving lives through expert
                      care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Family & General Practice: Promoting health and wellness
                      for all ages, emphasizing prevention, and providing
                      comprehensive medical care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Gastroenterology: Advancing digestive health, specialized
                      care, and innovative treatments for improved patient
                      well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Internal Medicine: Fostering health from within, providing
                      comprehensive care, and enhancing quality of life through
                      medical expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Independent Diagnostic Facility: Delivering accurate
                      diagnostics, early detection, and precise insights for
                      better healthcare decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Neurology: Pioneering brain and nervous system care,
                      improving lives through advanced treatments and expert
                      neurological care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      OB-GYN: Supporting women's health, pregnancy, and
                      reproductive well-being through compassionate care and
                      medical expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Oncology: Leading the fight against cancer, offering
                      advanced treatments, and striving for a world without this
                      devastating disease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Podiatry: Caring for foot and ankle health, enhancing
                      mobility, and ensuring a step towards a pain-free, active
                      life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      {/* <AiOutlineAudit
                        
                        style={{ color: "rgb(2, 2, 136)" }}
                      /> */}
                      <img
                        src="https://www.pyramidsglobal.com/wp-content/uploads/2022/10/psychiatry-icon.png.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Psychiatry</h3>
                    <p>
                      Psychiatry: Nurturing mental health, providing
                      compassionate care, and offering hope and healing for
                      individuals and families.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Pain Management: Alleviating suffering, enhancing
                      function, and improving lives through personalized pain
                      relief solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Pathology Lab: Pioneering diagnostics, precise testing,
                      and valuable insights for informed medical decisions and
                      better health.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <img
                        src="https://www.pyramidsglobal.com/wp-content/uploads/2022/10/pediatric-icon.png.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Pediatrics</h3>
                    <p>
                      Pediatrics: Safeguarding children's health, growth, and
                      development, offering compassionate care and a brighter
                      future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Pulmonary Disease: Advancing lung health, providing expert
                      care, and improving quality of life for those with
                      respiratory conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Radiology: Illuminating health through precise imaging,
                      diagnosis, and vital insights for better patient care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Urgent Care: Timely, accessible healthcare, offering
                      immediate solutions for injuries and illnesses, ensuring
                      well-being.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
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
                      Home Health: Bringing care to your doorstep, enhancing
                      comfort, and promoting recovery through skilled,
                      compassionate professionals.
                    </p>
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
