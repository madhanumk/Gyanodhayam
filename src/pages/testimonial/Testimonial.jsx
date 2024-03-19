import React from "react";
import Seo from "../../components/common/seo/Seo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Footer from "../../components/business/Footer";
import TestimonialContent from "../../components/testimonial/TestimonialContent";

const Testimonial = () => {
  return (
    <>
      <Seo title="Testimonial" />

      <Sidebar />

      <Header />

      <TestimonialContent />

      <Footer />
    </>
  );
};

export default Testimonial;
