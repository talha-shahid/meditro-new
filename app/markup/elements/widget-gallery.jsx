import React, { Component } from "react";

// Import Images
import galleryPic1 from "../../images/gallery/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic3 from "../../images/gallery/pic3.jpg";
import galleryPic4 from "../../images/gallery/pic4.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";
import galleryPic6 from "../../images/gallery/pic6.jpg";

class WidgetGallery extends Component {
  render() {
    return (
      <>
        <div className="widget widget_gallery gallery-grid-3">
          <h4 className="widget-title">Our Gallery</h4>

          <ul className="magnific-image">
            <li>
              <img src={galleryPic1.src} alt="" />
            </li>
            <li>
              <img src={galleryPic2.src} alt="" />
            </li>
            <li>
              <img src={galleryPic3.src} alt="" />
            </li>
            <li>
              <img src={galleryPic4.src} alt="" />
            </li>
            <li>
              <img src={galleryPic5.src} alt="" />
            </li>
            <li>
              <img src={galleryPic6.src} alt="" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default WidgetGallery;
