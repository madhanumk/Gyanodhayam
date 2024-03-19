import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import MediaContent from "../../components/media/MediaContent";

const Media = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Media & Press" />

      <Sidebar />

      <Header />

      <MediaContent  />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Media;
