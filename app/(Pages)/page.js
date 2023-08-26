// import Markup from "./markup/markup";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

import MainBannerSection from "@/app/markup/elements/main-banner";
import AboutSection from "@/app/markup/elements/about";
import WorkSection from "@/app/markup/elements/work";
import AppointmentSection from "@/app/markup/elements/appointment";
import TestimonialSection from "@/app/markup/elements/testimonial";
import ServicesSliderSection from "@/app/markup/elements/services-slider";
import LatestNewsSection from "@/app/markup/elements/latest-news-slider";
import OurPartnersSection from "@/app/markup/elements/our-partners-slider";
import PageScrollTop from "@/app/markup/elements/page-scroll-top";
import BackToTop from "@/app/markup/elements/back-top";

export default function Home() {
  return (
    <>
      <div className="page-wraper">
        <MainBannerSection />

        <AboutSection />

        <ServicesSliderSection />

        <AppointmentSection />

        <WorkSection />

        <TestimonialSection />

        <OurPartnersSection />

        <LatestNewsSection />

        <PageScrollTop />

        <BackToTop />
      </div>
    </>
  );
}
