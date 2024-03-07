import React, { useRef, useState } from "react";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import music from "../../assets/images/media_press/music.jpg";
import audio from "../../assets/images/media_press/audio.jpg";
import video from "../../assets/images/media_press/video.jpg";
import banner from "../../assets/images/media_press/banner.jpg";
import calendar from "../../assets/images/media_press/calendar.jpg";
import social_media from "../../assets/images/media_press/social-media.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const FounderContent = () => {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Music");

  // useEffect(() => {
  //     AOS.init(); // Initialize AOS when the component mounts
  // })

  AOS.init();

  const handleTabClick = (tabName) => {
    // Calculate the offset for the selected section
    setActiveTab(tabName);
  };
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title">Media & Press</h3>
              <p className="intro-content">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={banner} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="container mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div className="relative">
          <div className="row mt-50 sticky-container">
            <div className="col-lg-3 course2-syllabus">
              <div className="sticky">
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }} data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <li
                    onClick={() => handleTabClick("Music")}
                    className={
                      activeTab === "Music"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#music">Music</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Audio")}
                    className={`course2-list ${
                      activeTab === "Audio"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#audio">Audio</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Video")}
                    className={`course2-list ${
                      activeTab === "Video"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#video">Video</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Calendar")}
                    className={`course2-list ${
                      activeTab === "Calendar"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#calendar">Calendar</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Social Media")}
                    className={`course2-list ${
                      activeTab === "Social Media"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#social_media">Social Media</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Contact Us")}
                    className={`course2-list ${
                      activeTab === "Contact Us"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    <a href="#contact_us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" ref={contentRef}>
              <div id="music"></div>
              <div className="course2-outer">
                <img
                  src={flower_1}
                  alt="flower"
                  className="media-flower-image-1" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />

                <h4 className="course2-title text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Music</h4>
                <p className="course2-content text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                <div data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  <img src={music} alt="music" />
                </div>
                {/* <p className="guru-read">
                  <Link to="/introduction">Learn More</Link>
                </p> */}
              </div>

              <div id="audio"></div>
              <div className="course2-outer">
                <img
                  src={flower_2}
                  alt="flower"
                  className="media-flower-image-2" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4 className="course2-title text-align " data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Audio</h4>
                <p
                  className="course2-content text-align"
                  style={{ paddingBottom: "8px" }} data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>

                <div style={{ margin: "20px 0px" }} data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  <img src={audio} alt="audio" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              <div id="video"></div>
              <div className="course2-outer">
                <img
                  src={flower_4}
                  alt="illustration"
                  className="media-flower-image-3" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />

                <h4 className="course2-title text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Video</h4>
                <p className="course2-content text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                <div style={{ margin: "20px 0px" }} data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  <img src={video} alt="video" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              <div id="calendar"></div>
              <div className="course2-outer">
                <img
                  src={flower_3}
                  alt="illustration"
                  className="media-flower-image-4" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />

                <h4 className="course2-title text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Calendar</h4>
                <p className="course2-content text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                <div style={{ margin: "20px 0px" }} data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  <img src={calendar} alt="calendar" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              <div id="social_media"></div>
              <div className="course2-outer">
                <img
                  src={flower_1}
                  alt="illustration"
                  className="media-flower-image-5" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />

                <h4 className="course2-title text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Social Media</h4>
                <p className="course2-content text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                <div style={{ margin: "20px 0px" }} data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
                  <img src={social_media} alt="calendar" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              <div id="contact_us"></div>
              <div className="course2-outer">
                <img
                  src={flower_2}
                  alt="illustration"
                  className="media-flower-image-6" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4 className="course2-title text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Contact Us</h4>

                <p className="course2-content text-align" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">Registration Form</p>
              </div>
            </div>

            <div className="col-lg-3 empty-div">{/* empty div */}</div>
          </div>
        </div>
      </div>
      {/* End container */}
    </>
  );
};

export default FounderContent;
