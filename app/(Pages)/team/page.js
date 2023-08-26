"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Slick Carousel
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import trangleOrange from "@/app/images/shap/trangle-orange.png";
import squareDotsOrange from "@/app/images/shap/square-dots-orange.png";
import lineCircleBlue from "@/app/images/shap/line-circle-blue.png";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/circle-dots.png";
import teamMember1 from "@/app/images/team/member1.jpg";
import teamMember2 from "@/app/images/team/member2.jpg";
import teamMember3 from "@/app/images/team/member3.jpg";
import teamMember4 from "@/app/images/team/member4.jpg";
import teamMember5 from "@/app/images/team/member5.jpg";
import teamMember6 from "@/app/images/team/member6.jpg";
import Link from "next/link";

// Team Content
const teamMembers = [
  {
    thumb: teamMember1,
    title: "Dr. Addition Smith",
    subtitle: "Dentist",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    thumb: teamMember2,
    title: "Dr. Mahfuz Riad",
    subtitle: "Chiropractor",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    thumb: teamMember3,
    title: "Dr. David Benjamin",
    subtitle: "Cardiologist",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    thumb: teamMember4,
    title: "Dr. Addition Smith",
    subtitle: "Dentist",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    thumb: teamMember5,
    title: "Dr. Mahfuz Riad",
    subtitle: "Chiropractor",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    thumb: teamMember6,
    title: "Dr. David Benjamin",
    subtitle: "Cardiologist",
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
];

class Team extends Component {
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
                  <h1>Our Team</h1>
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
                        Our Team
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

          <section className="section-area section-sp1 team-wraper">
            <div className="container">
              <div className="row">
                {teamMembers.map((teamMember, index) => (
                  <div key={index} className="col-lg-4 col-sm-6">
                    <div className="team-member mb-30">
                      <div className="team-media">
                        <img src={teamMember.thumb.src} alt="" />
                      </div>
                      <div className="team-info">
                        <div className="team-info-comntent">
                          <h4 className="title">{teamMember.title}</h4>
                          <span className="text-secondary">
                            {teamMember.subtitle}
                          </span>
                        </div>
                        <ul className="social-media mt-3">
                          {teamMember.socialMedia.map((social, index) => (
                            <li key={index}>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href={social.link}
                              >
                                <i
                                  className={`fab fa-${social.platform.toLowerCase()}`}
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img className="pt-img1 animate1" src={trangleOrange.src} alt="" />

            <img
              className="pt-img2 animate2"
              src={squareDotsOrange.src}
              alt=""
            />

            <img
              className="pt-img3 animate-rotate"
              src={lineCircleBlue.src}
              alt=""
            />

            <img className="pt-img4 animate-wave" src={waveBlue.src} alt="" />

            <img className="pt-img5 animate-wave" src={plusBlue.src} alt="" />
          </section>
        </div>
      </>
    );
  }
}

export default Team;
