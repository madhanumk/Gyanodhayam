import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import TrustCourseContent from "../../components/Courses/TrustCourseContent";


const TrustCourse = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Trust Course" />

      <Sidebar />

      <Header />
      
      <TrustCourseContent />

      <Footer />

    </div>
  );
};

export default TrustCourse;
