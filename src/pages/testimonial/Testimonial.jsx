import React from "react";
import Seo from "../../components/common/seo/Seo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import qoutes_up from "../../assets/images/quotes-up.svg";
import qoutes_down from "../../assets/images/quotes-down.svg";
import Footer from "../../components/business/Footer";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import gravida from "../../assets/images/testimonial/img-2.jpg";
import faucibus from "../../assets/images/testimonial/img-3.jpg";
import turpis from "../../assets/images/testimonial/img-4.jpg";
import faucibus_nisl from "../../assets/images/testimonial/img-5.jpg";
import { Link } from "react-router-dom";
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
