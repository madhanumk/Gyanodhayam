import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import NanneriContent from "../../components/Courses/NanneriContent";

const Nanneri = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Nanneri" />

      <Sidebar />

      <Header />
      
      <NanneriContent />

      <Footer />

    </div>
  );
};

export default Nanneri;
