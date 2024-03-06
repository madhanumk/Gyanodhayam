import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import FounderContent from "../../components/Founder/FounderContent";

const Founder = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Founder" />
      <Sidebar />
      <Header />
      <FounderContent />
      <Footer />
    </div>
  );
};

export default Founder;
