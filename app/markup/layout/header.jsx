"use client";

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

// Images
import logo from "../../images/logo-n.png";
import logoWhite from "../../images/logo-white.png";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchBtn] = useState(false);
  const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
  const quikSearchClose = () => setIsSearchBtn(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleSubmenu = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuLinkClick = () => {
    if (window.innerWidth <= 991) {
      setIsMenuOpen(false);
    }
  };

  const handleContactBtnClick = () => {
    setIsMenuOpen(false);
    // Implement the logic to toggle the contact sidebar here.
  };

  const handleMenuCloseClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 768);
    };

    // Check the screen size on initial render and whenever the window is resized
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: "home",
      name: "Home",
      linkName: "#",
    },

    // {
    // 	id: 'pages',
    // 	name: 'Pages',
    // 	linkName: '#',

    // 	subItems: [
    // 		{
    // 			id: 'aboutus',
    // 			displayName: 'About Us',
    // 			linkName: 'about-us'
    // 		},
    // 		{
    // 			id: 'team',
    // 			displayName: 'Our Team',
    // 			linkName: 'team'
    // 		},
    // 		{
    // 			id: 'faq',
    // 			displayName: "FAQ's",
    // 			linkName: 'faq'
    // 		},
    // 		{
    // 			id: 'booking',
    // 			displayName: 'Booking',
    // 			linkName: 'booking'
    // 		},
    // 		{
    // 			id: 'error',
    // 			displayName: 'Error 404',
    // 			linkName: 'error-404'
    // 		},
    // 		{
    // 			id: 'formLogin',
    // 			displayName: 'Login / Register',
    // 			linkName: 'form-login'
    // 		},
    // 	]
    // },
    {
      id: "services",
      name: "Services",
      linkName: "#",

      subItems: [
        {
          id: "serviceDetail",
          displayName: "Credentialing & Enrollment",
          linkName: "services/credentialing-enrollment",
        },
        {
          id: "serviceDetail",
          displayName: "Medical Billing Services",
          linkName: "services/medical-billing-services",
        },
        {
          id: "serviceDetail",
          displayName: "Medical Coding Services",
          linkName: "services/medical-coding-services",
        },
        {
          id: "serviceDetail",
          displayName: "Front Office Services",
          linkName: "services/front-office-services",
        },
        {
          id: "serviceDetail",
          displayName: "Patient Billing",
          linkName: "services/patient-billing",
        },
        {
          id: "serviceDetail",
          displayName: "Practice Audit",
          linkName: `services/practice-audit`,
        },
        {
          id: "serviceDetail",
          displayName: "Others",
          linkName: "services",
        },
      ],
    },
    {
      id: "Specialities",
      name: "Specialities",
      linkName: "#",

      subItems: [
        {
          id: "aboutus",
          displayName: "Anesthesiology",
          linkName: "specialities/anesthesiology",
        },
        {
          id: "team",
          displayName: "Cardiology",
          linkName: "specialities/cardiology",
        },
        {
          id: "faq",
          displayName: "Chiropractics",
          linkName: "specialities/chiropractics",
        },
        {
          id: "booking",
          displayName: "Dermatology",
          linkName: "specialities/dermatology",
        },
        {
          id: "error",
          displayName: "DME (Durable Medical Equipment)",
          linkName: "specialities/dme",
        },
        {
          id: "formLogin",
          displayName: "Endocrinology",
          linkName: "specialities/endocrinology",
        },
        {
          id: "formLogin",
          displayName: "Others",
          linkName: "specialities",
        },
      ],
    },
    {
      id: "resources",
      name: "Resources",
      linkName: "#",

      subItems: [
        {
          id: "resources",
          displayName: "Blogs",
          linkName: "blogs",
        },
        {
          id: "resources",
          displayName: "Brochures",
          linkName: "#",
        },
      ],
    },
    {
      id: "ourCompany",
      name: "Our Company",
      linkName: "#",
      subItems: [
        {
          id: "ourCompany",
          displayName: "Contact Us",
          linkName: "contact-us",
        },
        {
          id: "ourCompany",
          displayName: "About us",
          linkName: "about-us",
        },
      ],
    },
  ];

  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container-fluid clearfix">
            <div className="menu-logo logo-dark">
              <Link href="/">
                <img src={logo.src} alt="" />
              </Link>
            </div>

            <button
              className={`navbar-toggler collapsed menuicon justify-content-end ${
                isMenuOpen ? "open" : ""
              }`}
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="secondary-menu">
              <ul>
                <li className="search-btn">
                  <button
                    id="quikSearchBtn"
                    type="button"
                    className="btn-link"
                    onClick={quikSearchBtn}
                  >
                    <i className="las la-search"></i>
                  </button>
                </li>
                <li className="num-bx">
                  <Link href="tel:(+01)999888777">
                    <i className="fas fa-phone-alt"></i>
                    +1 510 209 3111
                  </Link>
                </li>
                <li className="btn-area">
                  <Link href="/contact-us" className="btn btn-primary shadow">
                    CONTACT US{" "}
                    <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`menu-links navbar-collapse collapse justify-content-end ${
                isMenuOpen ? "show" : ""
              }`}
              id="menuDropdown"
            >
              <div className="menu-logo">
                <Link href="/">
                  <img src={logoWhite.src} alt="" />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${activeItem === item.id ? "open" : ""}`}
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    {item.subItems ? (
                      <Link href="#">
                        {item.name}
                        <i className={`fas fa-plus`}></i>
                      </Link>
                    ) : (
                      <Link
                        href={`/${item.linkName}`}
                        onClick={handleMenuLinkClick}
                      >
                        {item.name}
                      </Link>
                    )}
                    {(isMobileView || activeItem === item.id) &&
                      item.subItems && (
                        <ul className="sub-menu">
                          {item.subItems.map((subItem, index) => (
                            <li key={subItem.id}>
                              <Link
                                href={`/${subItem.linkName}`}
                                onClick={handleMenuLinkClick}
                              >
                                <span>{subItem.displayName}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>

              <ul className="social-media">
                <li>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-google"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>

              <div className="menu-close" onClick={handleMenuCloseClick}>
                <i className="ti-close"></i>
              </div>
            </div>
          </div>
        </div>
      </Sticky>

      <div className={`nav-search-bar ${isSearchFormOpen ? "show" : ""}`}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
          />
          <span>
            <i className="ti-search"></i>
          </span>
        </form>
        <span id="searchRemove" onClick={quikSearchClose}>
          <i className="ti-close"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
