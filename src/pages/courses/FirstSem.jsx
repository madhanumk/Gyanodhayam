import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import FirstSemContent from "../../components/Courses/FirstSemContent";


const FirstSem = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="First Sem" />

      <Sidebar />

      <Header />
      
      <FirstSemContent />

      <Footer />

    </div>
  );
};

export default FirstSem;
