import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import homeBanner from '../../assets/images/Banner.jpg'
import bannerLogo from "../../assets/images/BannerLogo.png"
import Footer from "../../components/business/Footer";
import FounderContent from "../../components/Founder/FounderContent";
import TestimonialContent from "../../components/testimonial/TestimonialContent";
import SingleTestimonialContent from "../../components/testimonial/SingleTestimonialContent";

const SingleTestimonial = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Single Testimonial" />

      <Sidebar />

      <Header />

      <SingleTestimonialContent />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default SingleTestimonial;
