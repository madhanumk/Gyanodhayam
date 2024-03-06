import React from 'react'
import { Link } from 'react-router-dom'
import elementum from "../../assets/images/testimonial/img-1.jpg";
import gravida from "../../assets/images/testimonial/img-2.jpg";
import faucibus from "../../assets/images/testimonial/img-3.jpg";
import turpis from "../../assets/images/testimonial/img-4.jpg";
import faucibus_nisl from "../../assets/images/testimonial/img-5.jpg";

const SingleTestimonialContent = () => {
  return (
  <>
  <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom:"20px" }}>Our Blog</h3>
              <p  className='testimonial-para ' style={{fontSize:"24px", lineHeight:"28 px",color:"#f0ecec" }} >lorem ippusom  is simply dummy text of the printing and typesetting<br/> industry dummy  industry dummy  typesetting industry</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mb-100">

        <div className="row pb-100">
          <div className="col-lg-6">
            <div className='testimonial-img-outer' >
              <img src={elementum} alt="jai-guruji" />
            </div>
          </div>
          <div  className="col-lg-6 testmonial-secondCol">
            <div  className='testimonial-para' style={{width:"70%"}}>
              <p>Elementum</p>
              <p className='testimonial-content'><i>lorem ippusom  is simply dummy text of the printing and typesetting industry dummy  typesetting industry industry dummy  industry dummy  typesetting industryindustry dummy  industry dummy  typesetting industryindustry dummy  industry dummy  typesetting industryindustry dummy  industry dummy  typesetting industry industry dummy  industry dummy  typesetting industryindustry dummy  industry dummy  typesetting industry</i></p>
             
            </div>
          </div>
        </div>

      </div>
  </>
  )
}

export default SingleTestimonialContent