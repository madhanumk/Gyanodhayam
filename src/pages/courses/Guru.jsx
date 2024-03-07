import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import GuruContent from "../../components/Courses/GuruContent";

const Guru = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Teachers Practice Course" />

      <Sidebar />

      <Header />
      
      <GuruContent />

      <Footer />

    </div>
  );
};

export default Guru;
