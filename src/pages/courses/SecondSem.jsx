import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import SecondSemContent from "../../components/Courses/SecondSemContent";


const SecondSem = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Second Sem" />

      <Sidebar />

      <Header />
      
      <SecondSemContent />

      <Footer />

    </div>
  );
};

export default SecondSem;
