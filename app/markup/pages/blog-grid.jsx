import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import blogGridPic7 from "../../images/blog/grid/pic7.jpg";
import blogGridPic8 from "../../images/blog/grid/pic8.jpg";
import blogGridPic9 from "../../images/blog/grid/pic9.jpg";

// Blog Content
const blogPost = [
  {
    thumb: blogGridPic1,
    authorPic: testPic1,
    title: "Dental Care for Women is very important",
    author: "John deo",
    date: "21 July 2021",
  },
  {
    thumb: blogGridPic2,
    authorPic: testPic2,
    title: "In this hospital there are special surgeon",
    author: "Peter Packer",
    date: "20 July 2021",
  },
  {
    thumb: blogGridPic3,
    authorPic: testPic3,
    title: "Why Is Skin Surgeon Considered Underrated",
    author: "Sonar Moyna",
    date: "19 July 2021",
  },
  {
    thumb: blogGridPic4,
    authorPic: testPic4,
    title: "Understand Health Before You Regret",
    author: "Kalina",
    date: "18 July 2021",
  },
  {
    thumb: blogGridPic5,
    authorPic: testPic5,
    title: "Health Will Be A Thing Of The Past And Here",
    author: "Michel",
    date: "17 July 2021",
  },
  {
    thumb: blogGridPic6,
    authorPic: testPic6,
    title: "Can you get a diflucan prescription online?",
    author: "Peter Packer",
    date: "16 July 2021",
  },
  {
    thumb: blogGridPic7,
    authorPic: testPic1,
    title: "Ten Gigantic Influences Of Health",
    author: "Sonar Moyna",
    date: "15 July 2021",
  },
  {
    thumb: blogGridPic8,
    authorPic: testPic2,
    title: "Why Is Skin Surgeon Considered Underrated",
    author: "Kalina",
    date: "14 July 2021",
  },
  {
    thumb: blogGridPic9,
    authorPic: testPic3,
    title: "Everyone need to go Dentist regularly",
    author: "Michel",
    date: "13 July 2021",
  },
];

class BlogGrid extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Blog Grid 3</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <div href="/">
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
                        </div>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Blog Grid 3
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>

          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                {blogPost.map((blogPost, index) => (
                  <div key={index} className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                      <div className="post-media">
                        <div href="/blog-details">
                          <img src={blogPost.thumb} alt="" />
                        </div>
                      </div>
                      <div className="post-info">
                        <ul className="post-meta">
                          <li className="author">
                            <div href="/blog-details">
                              <img src={blogPost.authorPic} alt="" />{" "}
                              {blogPost.author}
                            </div>
                          </li>
                          <li className="date">
                            <i className="far fa-calendar-alt"></i>{" "}
                            {blogPost.date}
                          </li>
                        </ul>
                        <h4 className="post-title">
                          <div href="/blog-details">{blogPost.title}</div>
                        </h4>
                        <div
                          href="/blog-details"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Read More{" "}
                          <i className="btn-icon-bx fas fa-chevron-right"></i>
                        </div>
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
                        <div href="#">Prev</div>
                      </li>
                      <li className="active">
                        <div href="#">1</div>
                      </li>
                      <li>
                        <div href="#">2</div>
                      </li>
                      <li>
                        <div href="#">3</div>
                      </li>
                      <li className="next">
                        <div href="#">Next</div>
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
