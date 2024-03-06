import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import LifeGyanodhayamContent from "../../components/life-gyanodhayam/LifeGyanodhayamContent";

const LifeGynodhayam = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Life In Gyanodhayam" />

      <Sidebar />

      <Header />

      <LifeGyanodhayamContent />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default LifeGynodhayam;
