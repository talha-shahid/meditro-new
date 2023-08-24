"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import lingBg2 from "../../images/background/line-bg2.png";
import animate1 from "../../images/shap/trangle-orange.png";
import animate2 from "../../images/shap/square-dots-orange.png";
import animateRotate from "../../images/shap/line-circle-blue.png";
import animateWave from "../../images/shap/wave-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
// import testPic4 from "../../images/testimonials/pic4.jpg";
// import testPic5 from "../../images/testimonials/pic5.jpg";
import blogGridPic1 from "../../images/blog/grid/p1.jpg";
import blogGridPic2 from "../../images/blog/grid/p2.jpg";
import blogGridPic3 from "../../images/blog/grid/p3.png";
// import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
// import blogGridPic5 from "../../images/blog/grid/pic5.jpg";

// Team Content
const content = [
  {
    thumb: blogGridPic1,
    authorPic: testPic1,
    author: "John deo",
    title: "Navigating ICD-10 2024 Conventions: A Comprehensive Guide",
    date: "21 July 2021",
  },
  {
    thumb: blogGridPic2,
    authorPic: testPic2,
    author: "Peter Packer",
    title:
      "12 Essential Steps for Maximizing Reimbursements in Your Medical Practice",
    date: "20 July 2021",
  },
  {
    thumb: blogGridPic3,
    authorPic: testPic3,
    author: "Sonar Moyna",
    title:
      "Safeguarding Patient Trust: The Vital Importance of HIPAA Compliance in Data Protection",
    date: "19 July 2021",
  },
  // {
  //   thumb: blogGridPic4,
  //   authorPic: testPic4,
  //   author: "Kalina Mollika",
  //   title: "Dental Care for Women is very important",
  //   date: "18 July 2021",
  // },
  // {
  //   thumb: blogGridPic5,
  //   authorPic: testPic5,
  //   author: "Michel",
  //   title: "Health Will Be A Thing Of The Past And Here's Why",
  //   date: "17 July 2021",
  // },
];

const NewsItem = ({ item }) => {
  return (
    <div className="slider-item">
      <div className="blog-card">
        <div className="post-media">
          <div style={{ height: "15rem" }} href={`/blog-details`}>
            <img src={item.thumb.src} alt="" />
          </div>
        </div>
        <div className="post-info">
          <ul className="post-meta">
            <li className="author">
              <div href="/blog-details">
                <img src={item.authorPic.src} alt="" />
                {item.author}
              </div>
            </li>
            <li className="date">
              <i className="far fa-calendar-alt"></i>
              {item.date}
            </li>
          </ul>
          <h5 className="post-title">
            <div href="/blog-details">{item.title}</div>
          </h5>
          <a href={`/blog-details`} className="btn btn-outline-primary btn-sm">
            Read More <i className="btn-icon-bx fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1191,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

class LatestNewsSection extends Component {
  render() {
    return (
      <>
        <section
          className="section-area section-sp1 blog-area"
          style={{
            backgroundImage: "url(" + lingBg2.src + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Latest News</h6>
              <h2 className="title">Our Latest News</h2>
            </div>

            <Slider
              {...settings}
              className="tt-slider blog-slide slider-sp0 slick-arrow-none"
            >
              {content.map((item) => (
                <NewsItem key={item.title} item={item} />
              ))}
            </Slider>
          </div>

          <img className="pt-img1 animate1" src={animate1.src} alt="" />
          <img className="pt-img2 animate2" src={animate2.src} alt="" />
          <img
            className="pt-img3 animate-rotate"
            src={animateRotate.src}
            alt=""
          />
          <img className="pt-img4 animate-wave" src={animateWave.src} alt="" />
        </section>
      </>
    );
  }
}

export default LatestNewsSection;
