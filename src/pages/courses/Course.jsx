import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import CourseContent from "../../components/Courses/CourseContent";

const Course = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Courses" />

      <Sidebar />

      <Header />
      
      <CourseContent />

      <Footer />

    </div>
  );
};

export default Course;
