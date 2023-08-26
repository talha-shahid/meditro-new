"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// StyleSheet
import "@/app/App.scss";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
import testPic1 from "@/app/images/testimonials/pic1.jpg";
import testPic2 from "@/app/images/testimonials/pic2.jpg";
import testPic3 from "@/app/images/testimonials/pic3.jpg";
import testPic4 from "@/app/images/testimonials/pic4.jpg";
import testPic5 from "@/app/images/testimonials/pic5.jpg";
import testPic6 from "@/app/images/testimonials/pic6.jpg";
import blogGridPic1 from "@/app/images/blog/grid/pic1.jpg";
import blogGridPic2 from "@/app/images/blog/grid/pic2.jpg";
import blogGridPic3 from "@/app/images/blog/grid/pic3.jpg";
import blogGridPic4 from "@/app/images/blog/grid/pic4.jpg";
import blogGridPic5 from "@/app/images/blog/grid/pic5.jpg";
import blogGridPic6 from "@/app/images/blog/grid/pic6.jpg";
import blogGridPic7 from "@/app/images/blog/grid/pic7.jpg";
import blogGridPic8 from "@/app/images/blog/grid/pic8.jpg";
import blogGridPic9 from "@/app/images/blog/grid/pic9.jpg";

// Blog Content
const blogPost = [
  {
    thumb: blogGridPic1,
    authorPic: testPic1,
    author: "John deo",
    title: "Navigating ICD-10 2024 Conventions: A Comprehensive Guide",
    slug: "navigating-icd-10-2024-conventions-a-comprehensive-guide",
    date: "21 July 2021",
  },
  {
    thumb: blogGridPic2,
    authorPic: testPic2,
    author: "Peter Packer",
    title:
      "12 Essential Steps for Maximizing Reimbursements in Your Medical Practice",
    slug: "12-essential-steps-for-maximizing-reimbursements-in-your-medical-practice",
    date: "20 July 2021",
  },
  {
    thumb: blogGridPic3,
    authorPic: testPic3,
    author: "Sonar Moyna",
    title:
      "Safeguarding Patient Trust: The Vital Importance of HIPAA Compliance in Data Protection",
    slug: "safeguarding-patient-trust-the-vital-importance-of-hipaa-compliance-in-data-protection",
    date: "19 July 2021",
  },
  // {
  //   thumb: blogGridPic4,
  //   authorPic: testPic4,
  //   title: "Understand Health Before You Regret",
  //   author: "Kalina",
  //   date: "18 July 2021",
  // },
  // {
  //   thumb: blogGridPic5,
  //   authorPic: testPic5,
  //   title: "Health Will Be A Thing Of The Past And Here",
  //   author: "Michel",
  //   date: "17 July 2021",
  // },
  // {
  //   thumb: blogGridPic6,
  //   authorPic: testPic6,
  //   title: "Can you get a diflucan prescription online?",
  //   author: "Peter Packer",
  //   date: "16 July 2021",
  // },
  // {
  //   thumb: blogGridPic7,
  //   authorPic: testPic1,
  //   title: "Ten Gigantic Influences Of Health",
  //   author: "Sonar Moyna",
  //   date: "15 July 2021",
  // },
  // {
  //   thumb: blogGridPic8,
  //   authorPic: testPic2,
  //   title: "Why Is Skin Surgeon Considered Underrated",
  //   author: "Kalina",
  //   date: "14 July 2021",
  // },
  // {
  //   thumb: blogGridPic9,
  //   authorPic: testPic3,
  //   title: "Everyone need to go Dentist regularly",
  //   author: "Michel",
  //   date: "13 July 2021",
  // },
];

class BlogGrid extends Component {
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
                  <h1>Blogs</h1>
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Blog
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

          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                {blogPost.map((blogPost, index) => (
                  <div key={index} className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                      <div className="post-media">
                        <div
                          style={{ height: "15rem" }}
                          href={`/blogs/${blogPost.slug}`}
                        >
                          <img src={blogPost.thumb.src} alt="" />
                        </div>
                      </div>
                      <div className="post-info">
                        <ul className="post-meta">
                          <li className="author">
                            <div href={`/blogs/${blogPost.slug}`}>
                              <img src={blogPost.authorPic.src} alt="" />
                              {blogPost.author}
                            </div>
                          </li>
                          <li className="date">
                            <i className="far fa-calendar-alt"></i>
                            {blogPost.date}
                          </li>
                        </ul>
                        <h5 className="post-title">
                          <div href={`/blogs/${blogPost.slug}`}>
                            {blogPost.title}
                          </div>
                        </h5>
                        <a
                          href={`/blogs/${blogPost.slug}`}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Read More{" "}
                          <i className="btn-icon-bx fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="pagination-bx text-center mb-30 clearfix">
                    <ul className="pagination">
                      <li className="previous">
                        <a href="#">Prev</a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">Next</a>
                      </li>
                    </ul>
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

export default BlogGrid;
