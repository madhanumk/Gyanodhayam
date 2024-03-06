import React from "react";
import Seo from "../common/seo/Seo";
import Sidebar from "../common/header/sidebar/Sidebar";
import Header from "../business/Header";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import qoutes_up from "../../assets/images/quotes-up.svg";
import qoutes_down from "../../assets/images/quotes-down.svg";
import homeBanner from "../../assets/images/Banner.jpg";
import bannerLogo from "../../assets/images/BannerLogo.png";
import nanneri from "../../assets/images/Courses/education/img-nanneri/img-1.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";

const Courses1 = () => {
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title" style={{ paddingRight: "50px" }}>
                Nanneri
              </h3>
              <p className="intro-content">
                “By Understanding the Ultimate Truth by realizing the Soul, We
                will attain the Ultimate Joy in Life”-
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-100 mb-100 lg-mt-50 lg-mb-50 relative">
        <img
          src={flower_1}
          alt="illustration"
          className="nanneri-flower-image-1"
        />
        <div className="row pb-40 lg-pb-10">
          <div className="col-lg-2 empty-div"></div>
          <div className="col-lg-8">
            <h3 className="nanneri-header">Nanneri</h3>
          </div>
          <div className="col-lg-2 empty-div"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 empty-div">{/* empty div */}</div>

          <div className="col-lg-8">
            <div className="nanneri-contents" style={{ paddingBottom: "40px" }}>
              <div className="nanneri-image-outer">
                <img
                  src={nanneri}
                  alt="nanneri"
                  className="nanneri-nanneri-image"
                />
              </div>
              <div className="text-align">
                <h4 className="nanneri-header-1">Course Syllabus</h4>
                <ul className="nanneri-list">
                  <li>Simple exercises</li>
                  <li>Surya Namaskaram</li>
                  <li>Proper food habits</li>
                  <li>Discipline and ethics to lead a healthy life</li>
                  <li>Key points for healthy body</li>
                  <li>Meditation practices</li>
                </ul>
              </div>
            </div>
            <div className="text-align">
              <img
                src={flower_2}
                alt="illustration"
                className="nanneri-flower-image-2"
              />
              <h4 className="nanneri-header-1">Rules for students:</h4>

              <ul className="nanneri-rules-list">
                <li>People of all ages can participate.</li>
                <li>Classes take place on Saturdays or Sundays.</li>
                <li>
                  Classes are held for two hours in the morning or evening.
                </li>
                <li>
                  There is no specific time period for this class. Students may
                  continuously come to the class.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 empty-div">{/* empty div */}</div>
        </div>
      </div>
    </>
  );
};

export default Courses1;

<div style={{ display: "flex", flexDirection: "column" }}>
  <div>
    <h1>hi</h1>
  </div>
  <div style={{ order: -1, "@media (min-width: 768px)": { order: 0 } }}>
    <div>Raj</div>
  </div>
</div>;
