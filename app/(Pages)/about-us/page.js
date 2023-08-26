"use client";

import React, { Component } from "react";
// import {Link} from 'react-router-dom';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Elements
import AboutSection from "@/app/markup/elements/about";
import LatestNewsSection from "@/app/markup/elements/latest-news-slider";
import FeatureSection3 from "@/app/markup/elements/feature-section3";
import TeamSection from "@/app/markup/elements/team";
import TestimonialSection from "@/app/markup/elements/testimonial";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
import Link from "next/link";

class AboutUs extends Component {
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
                  <h1>About Us</h1>
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us
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

          <AboutSection />

          {/* <FeatureSection3 /> */}

          {/* <TeamSection /> */}

          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}
            className="head-text mb-30"
          >
            <h1 className="title mb-15">Why ProMedix?</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              {" "}
              Welcome to Promedix Medical Billing Company, where we elevate your
              healthcare practice's financial success with unmatched expertise.
              Our highly skilled team ensures you receive the maximum allowable
              amount for your medical claims, providing timely payments that
              improve your cash flow. Compliance is our priority, mitigating
              risks and paving the way for increased revenue and growth. With
              our zero-tolerance approach to denials and rejections, errors are
              kept to less than zero. Our highly experienced credentialing
              experts ensure your practice to get credentialed with government
              payers like Medicare & Medicaid, as well as all commercial and
              state payers. Join Promedix today and experience the power of
              seamless billing, empowering your practice to thrive in the
              ever-changing healthcare landscape.With Web-based and telephonic
              Medical billing support and 24/7 customer service, emerging as a
              factor that gives the needed edge to a company, we are introducing
              ourselves as a leading, high quality, IT Enabled service providers
              in the field of medical billing.
            </p>
            <h1 className="title mb-15">MISSION</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              {" "}
              Promedix's mission is to revolutionize the healthcare billing
              landscape by providing exceptional expertise and seamless
              solutions to healthcare providers. Our primary goal is to empower
              healthcare practices with the tools and support they need to
              achieve unparalleled financial success. At Promedix, we understand
              the challenges that healthcare providers face in navigating the
              complex billing processes. Our mission is to streamline these
              processes, making them efficient, accurate, and compliant. By
              leveraging our team of highly skilled and dedicated medical
              billing experts, we strive to optimize the revenue cycle and
              maximize reimbursements for our clients.
            </p>
            <h1 className="title mb-15">VISION</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              {" "}
              At Promedix, we envision a future where healthcare providers can
              focus on patient care with complete peace of mind, knowing that
              their billing operations are in the hands of experts. We aspire to
              empower healthcare practices to achieve unprecedented financial
              success, allowing them to invest more time and resources in
              delivering exceptional care to their patients. Our vision is
              centered around being a strategic partner for our clients,
              understanding their unique needs and tailoring our services
              accordingly. By providing personalized solutions and unwavering
              support, we aim to build enduring partnerships with our clients
              and become an indispensable asset to their growth and success.
            </p>
            <h1 className="title mb-15">QUALITY POLICY </h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              {" "}
              Promedix's Quality Policy is centered on delivering exceptional
              and reliable medical billing services that surpass client
              expectations. With a focus on accuracy, efficiency, and
              compliance, we ensure precise claim submissions and minimize
              denials and rejections. Timely payments are prioritized to enhance
              our clients' financial stability. We maintain strict data security
              and confidentiality measures to safeguard sensitive medical
              information. Continuous improvement is at the core of our
              operations, and we embrace innovation to optimize our services
              continually. Client feedback plays a vital role in driving
              enhancements, allowing us to provide tailored solutions that meet
              the unique needs of each healthcare provider. Transparency and
              accountability are fundamental to our work ethic. We provide
              regular and detailed reports on billing processes, financial
              performance, and compliance measures, instilling confidence in our
              clients. Our team is our greatest asset, and we empower them
              through training and support to deliver exceptional service. We
              foster a customer centric approach, focusing on building strong
              and enduring relationships with our clients based on trust and
              open communication. Promedix is committed to being a trusted
              partner in the medical billing industry. Our quality policy guides
              every aspect of our operations, ensuring excellence, efficiency,
              and compliance at every step. With a dedication to continuous
              improvement and a customer-focused mindset, we strive to exceed
              expectations and provide unmatched billing solutions to our valued
              clients.
            </p>
          </div>

          <TestimonialSection />

          <LatestNewsSection />
        </div>
      </>
    );
  }
}

export default AboutUs;
