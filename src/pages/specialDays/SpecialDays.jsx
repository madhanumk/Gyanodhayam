import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import FirstSemContent from "../../components/Courses/FirstSemContent";
import SpecialDaysContent from "../../components/specialDays/SpecialDaysContent";


const SpecialDays = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="First Sem" />

      <Sidebar />

      <Header />
      
      <SpecialDaysContent />

      <Footer />

    </div>
  );
};

export default SpecialDays;
