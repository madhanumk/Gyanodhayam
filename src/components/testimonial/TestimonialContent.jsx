import React from "react";
import { Link } from "react-router-dom";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import gravida from "../../assets/images/testimonial/img-2.jpg";
import faucibus from "../../assets/images/testimonial/img-3.jpg";
import turpis from "../../assets/images/testimonial/img-4.jpg";
import faucibus_nisl from "../../assets/images/testimonial/img-5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialContent = () => {

     // useEffect(() => {
    //     AOS.init(); // Initialize AOS when the component mounts
    // })

    AOS.init();
    

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom: "20px" }}>
                Our Blog
              </h3>
              <p
                className="testimonial-para "
                style={{
                  fontSize: "24px",
                  lineHeight: "28 px",
                  color: "#f0ecec",
                }}
              >
                lorem ippusom is simply dummy text of the printing and
                typesetting
                <br />
                industry dummy industry dummy typesetting industry
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div className="row pb-100 lg-pb-50">
          <div className="col-lg-6" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-img-outer">
              <img src={elementum} alt="elementum" className="width-resize"/>
            </div>
          </div>
          <div className="col-lg-6 testmonial-secondCol" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-para width-resize text-align" >
              <p>Elementum</p>
              <p className="testimonial-content">
                <i>
                  lorem ippusom is simply dummy text of the printing and
                  typesetting industry dummy typesetting industry
                </i>
              </p>
              <p>
                <Link
                  to="/single-testimonial"
                  className="testimonial-read-more"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="row  pb-100 lg-pb-50">
          <div className="col-lg-6" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-img-outer">
              <img src={gravida} alt="jai-guruji"   className="width-resize"/>
            </div>
          </div>
          <div className="col-lg-6 testmonial-secondCol" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-para width-resize text-align">
              <p>Gravida cum</p>
              <p className="testimonial-content">
                <i>
                  lorem ippusom is simply dummy text of the printing and
                  typesetting industry dummy typesetting industry
                </i>
              </p>
              <p>
                <Link
                  to="/single-testimonial"
                  className="testimonial-read-more"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="row pb-100 lg-pb-50">
          <div className="col-lg-6" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-img-outer">
              <img src={faucibus} alt="faucibus"  className="width-resize"/>
            </div>
          </div>
          <div className="col-lg-6 testmonial-secondCol" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-para  width-resize text-align">
              <p>Faucibus Ornare</p>
              <p className="testimonial-content">
                <i>
                  lorem ippusom is simply dummy text of the printing and
                  typesetting industry dummy typesetting industry
                </i>
              </p>
              <p>
                <Link
                  to="/single-testimonial"
                  className="testimonial-read-more"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="row pb-100 lg-pb-50">
          <div className="col-lg-6" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-img-outer">
              <img src={turpis} alt="turpis"  className="width-resize" />
            </div>
          </div>
          <div className="col-lg-6 testmonial-secondCol" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-para  width-resize text-align">
              <p>Turpis massa</p>
              <p className="testimonial-content">
                <i>
                  lorem ippusom is simply dummy text of the printing and
                  typesetting industry dummy typesetting industry
                </i>
              </p>
              <p>
                <Link
                  to="/single-testimonial"
                  className="testimonial-read-more"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-img-outer">
              <img src={faucibus_nisl} alt="faucibus_nisl"  className="width-resize" />
            </div>
          </div>
          <div className="col-lg-6 testmonial-secondCol" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200">
            <div className="testimonial-para  width-resize text-align">
              <p>Faucibus nisl</p>
              <p className="testimonial-content">
                <i>
                  lorem ippusom is simply dummy text of the printing and
                  typesetting industry dummy typesetting industry
                </i>
              </p>
              <p>
                <Link
                  to="/single-testimonial"
                  className="testimonial-read-more"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialContent;
