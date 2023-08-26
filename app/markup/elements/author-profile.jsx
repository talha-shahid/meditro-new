import React, { Component } from "react";

// Import Images
import testPic2 from "../../images/testimonials/pic2.jpg";
import Link from "next/link";

class AuthorProfile extends Component {
  render() {
    return (
      <>
        <div className="author-box blog-user mb-50">
          <div className="author-profile-info">
            <div className="author-profile-pic">
              <img src={testPic2.src} alt="" />
            </div>
            <div className="author-profile-content">
              <h5>Sonar Z. Moyna</h5>
              <p className="mb-20">
                Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                consequat happ quam vel enim augue.
              </p>
              <ul className="social-media mb-0">
                <li>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AuthorProfile;
