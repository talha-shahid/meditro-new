"use client";

import React, { Component } from "react";
// import {Link} from 'react-router-dom';

import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// StyleSheet
import "@/app/App.scss";

// Elements
import AuthorProfile from "@/app/markup/elements/author-profile";
import CommentList from "@/app/markup/elements/comment-list";
import CommentRespond from "@/app/markup/elements/comment-respond";
import WidgetTag from "@/app/markup/elements/widget-tag";
import WidgetSearch from "@/app/markup/elements/widget-search";
import WidgetGallery from "@/app/markup/elements/widget-gallery";
import WidgetRecentPosts from "@/app/markup/elements/widget-recent-posts";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
import blogDefaultPic1 from "@/app/images/blog/default/pic1.jpg";
import testPic3 from "@/app/images/testimonials/pic3.jpg";
import galleryPic2 from "@/app/images/gallery/pic2.jpg";
import galleryPic5 from "@/app/images/gallery/pic5.jpg";

class BlogDetails extends Component {
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
                  <h1>Blog Details</h1>
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
                        Blog Details
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

          <section className="section-area section-sp1 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
                  <div className="blog-card blog-single">
                    <div className="post-media">
                      <img src={blogDefaultPic1.src} alt="" />
                    </div>
                    <div className="info-bx">
                      <ul className="post-meta">
                        <li className="author">
                          <a href="/blog-details">
                            <img src={testPic3.src} alt="" /> Sonar Moyna
                          </a>
                        </li>
                        <li className="date">
                          <i className="far fa-calendar-alt"></i> 19 July 2021
                        </li>
                      </ul>
                      <div className="ttr-post-title">
                        <h2 className="post-title">
                          Precious Tips To Help You Get Better.
                        </h2>
                      </div>
                      <div className="ttr-post-text">
                        <p>
                          You just need to enter the keyword and select the
                          keyword type to generate a list of 6 title ideas and
                          suggestions. If you’re not satisfied with the results,
                          you can always hit the refresh button to generate a
                          new list of unique titles.
                        </p>
                        <blockquote className="wp-block-quote">
                          <p>
                            Once you’ve gotten all the titles and have chosen
                            the best one, the next thing you need to do is to
                            craft a magnetic content. Great content marketers
                            excel at creating content.
                          </p>
                        </blockquote>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <ul className="wp-block-gallery columns-6 is-cropped">
                          <li className="blocks-gallery-item">
                            <img alt="" src={galleryPic2.src} />
                          </li>
                          <li className="blocks-gallery-item">
                            <img alt="" src={galleryPic5.src} />
                          </li>
                        </ul>
                        <p>
                          You just need to enter the keyword and select the
                          keyword type to generate a list of 6 title ideas and
                          suggestions. If you’re not satisfied with the results,
                          you can always hit the refresh button to generate a
                          new list of unique titles.
                        </p>
                        <p>
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                      <div className="ttr-post-footer">
                        <div className="post-tags">
                          <strong>Tags:</strong>
                          <a href="#">Health</a>
                          <a href="#">Growth</a>
                          <a href="#">Life</a>
                        </div>
                        <div className="share-post ml-auto">
                          <ul className="social-media mb-0">
                            <li>
                              <strong>Share:</strong>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/"
                              >
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <AuthorProfile />

                  <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                      <h4 className="widget-title">8 Comments</h4>

                      <div className="clearfix">
                        <CommentList />

                        <CommentRespond />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5 col-xl-4 mb-30">
                  <aside className="side-bar sticky-top aside-bx">
                    <WidgetSearch />

                    <WidgetRecentPosts />

                    <WidgetGallery />

                    <WidgetTag />
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default BlogDetails;
