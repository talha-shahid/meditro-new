import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "@/app/images/blog/grid/p1.jpg";
import recentBlogImg2 from "@/app/images/blog/grid/p2.jpg";
import recentBlogImg3 from "@/app/images/blog/grid/pic3.jpg";

class WidgetRecentPosts extends Component {
  render() {
    return (
      <>
        <div className="widget recent-posts-entry">
          <h4 className="widget-title">Recent Posts</h4>
          <div className="widget-post-bx">
            <div className="widget-post clearfix">
              <div style={{ height: "5.5rem" }} className="ttr-post-media">
                {" "}
                <img
                  src={recentBlogImg1.src}
                  width="200"
                  height="143"
                  alt=""
                />{" "}
              </div>
              <div className="ttr-post-info">
                <div className="ttr-post-header">
                  <h6 className="post-title">
                    <div>
                      Navigating ICD-10 2024 Conventions: A Comprehensive Guide
                    </div>
                  </h6>
                </div>
                <ul className="post-meta">
                  <li className="date">
                    <i className="far fa-calendar-alt"></i> 21 July 2021
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-post clearfix">
              <div className="ttr-post-media">
                {" "}
                <img
                  src={recentBlogImg2.src}
                  width="200"
                  height="160"
                  alt=""
                />{" "}
              </div>
              <div className="ttr-post-info">
                <div className="ttr-post-header">
                  <h6 className="post-title">
                    <div href="/blog-details">
                      12 Essential Steps for Maximizing Reimbursements in Your
                      Medical Practice
                    </div>
                  </h6>
                </div>
                <ul className="post-meta">
                  <li className="date">
                    <i className="far fa-calendar-alt"></i> 20 July 2021
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WidgetRecentPosts;
