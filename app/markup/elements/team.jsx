import React, { Component } from "react";

// Import Images
import teamMember1 from "../../images/team/member1.jpg";
import teamMember2 from "../../images/team/member2.jpg";
import teamMember3 from "../../images/team/member3.jpg";
import ptImg1 from "../../images/shap/trangle-orange.png";
import ptImg2 from "../../images/shap/square-dots-orange.png";
import ptImg3 from "../../images/shap/line-circle-blue.png";
import ptImg4 from "../../images/shap/wave-blue.png";
import ptImg5 from "../../images/shap/circle-dots.png";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Addition Smith",
    specialization: "Dentist",
    image: teamMember1,
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    name: "Dr. Mahfuz Riad",
    specialization: "Chiropractor",
    image: teamMember2,
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
  {
    name: "Dr. David Benjamin",
    specialization: "Cardiologist",
    image: teamMember3,
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/" },
      { platform: "Instagram", link: "https://www.instagram.com/" },
    ],
  },
];

class TeamSection extends Component {
  render() {
    return (
      <>
        <section className="section-area section-sp3 team-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Our Doctor</h6>
              <h2 className="title">Meet Best Doctors</h2>
            </div>
            <div className="row justify-content-center">
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="col-lg-4 col-sm-6 mb-30">
                  <div className="team-member">
                    <div className="team-media">
                      <img src={teamMember.image.src} alt={teamMember.name} />
                    </div>
                    <div className="team-info">
                      <div className="team-info-content">
                        <h4 className="title">{teamMember.name}</h4>
                        <span className="text-secondary">
                          {teamMember.specialization}
                        </span>
                      </div>
                      <ul className="social-media mt-3">
                        {teamMember.socialMedia.map((social, index) => (
                          <li key={index}>
                            <Link
                              rel="noreferrer"
                              target="_blank"
                              href={social.link}
                            >
                              <i
                                className={`fab fa-${social.platform.toLowerCase()}`}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="pt-img1 animate1" src={ptImg1} alt="" />
          <img className="pt-img2 animate2" src={ptImg2} alt="" />
          <img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
          <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
          <img className="pt-img5 animate-wave" src={ptImg5} alt="" />
        </section>
      </>
    );
  }
}

export default TeamSection;
