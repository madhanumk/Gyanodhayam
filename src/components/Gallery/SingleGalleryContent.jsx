import React, { useState } from "react";
import img1 from "../../assets/images/testimonial/img-1.jpg";
import img2 from "../../assets/images/testimonial/img-2.jpg";
import img3 from "../../assets/images/testimonial/img-3.jpg";
import img4 from "../../assets/images/testimonial/img-4.jpg";
import img5 from "../../assets/images/testimonial/img-5.jpg";
import Pagination from "../../pages/inner-pages/blog/Pagination";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const SingleGalleryContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handlePrevRequest = () => {
    setPhotoIndex((photoIndex + datas.length - 1) % datas.length);
  };

  const handleNextRequest = () => {
    setPhotoIndex((photoIndex + 1) % datas.length);
  };

  const datas = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img1,
    },
    {
      id: 7,
      image: img2,
    },
    {
      id: 8,
      image: img3,
    },
    {
      id: 9,
      image: img4,
    },
    {
      id: 10,
      image: img5,
    },
    {
      id: 11,
      image: img1,
    },
    {
      id: 12,
      image: img2,
    },
  ];
  return (
    <>
      <div className="blog-section-four mt-100 mb-100  lg-mt-50 lg-mb-50">
        <div className="container">
          <h4 className="course2-title text-align" style={{ paddingBottom: "40px", fontSize:"30px" }}>
            Lorem ipsum dolor sit amet
          </h4>
          <div className="row  course2-content">
            {isOpen && (
              <Lightbox
                mainSrc={datas[photoIndex].image}
                prevSrc={
                  datas[(photoIndex + datas.length - 1) % datas.length].image
                }
                nextSrc={datas[(photoIndex + 1) % datas.length].image}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={handlePrevRequest}
                onMoveNextRequest={handleNextRequest}
              />
            )}
            {datas.map((data, index) => (
              <div className="col-lg-3 col-md-6" style={{paddingBottom:"20px"}}>
                <div key={data.id} onClick={() => handleImageClick(index)}>
                  <img src={data.image} alt={`Image ${data.id}`} />
                </div>
              </div>
            ))}
          </div>
          {/* 
          <div className="row course2-content">
            <div className="col-lg-3">
              <div>
                <img src={img2} alt="blog post" />
              </div>
            </div>

            <div className="col-lg-3">
              <div>
                <img src={img3} alt="blog post" />
              </div>
            </div>

            <div className="col-lg-3">
              <div>
                <img src={img1} alt="blog post" />
              </div>
            </div>

            <div className="col-lg-3">
              <div>
                <img src={img2} alt="blog post" />
              </div>
            </div>
          </div> */}

          <div
            className="page-pagination-one pt-30"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGalleryContent;
