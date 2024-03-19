import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
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
