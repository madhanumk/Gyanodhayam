import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import TeachersContent from "../../components/Courses/TeachersContent";

const Teachers = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Teachers Practice Course" />

      <Sidebar />

      <Header />
      
      <TeachersContent />

      <Footer />

    </div>
  );
};

export default Teachers;
