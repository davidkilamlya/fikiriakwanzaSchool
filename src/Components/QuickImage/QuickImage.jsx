import React, { useState } from "react";
import { images } from "../../Constants";
import "./QuickImage.scss";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const quickImage = [
  images.class_discussion,
  images.library_choose_book,
  images.school_leaders,
];

function QuickImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = (e) => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handleForward = (e) => {
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <div className="quick-image">
      <div className="quick-image-title">
        <p className="quick-image-title-title">
          We are <span className="quick-image-title-focus">Committed </span> to
          Give you What You{" "}
          <span className="quick-image-title-focus">Deserve</span>
        </p>
      </div>
      <div className="arrow-back">
        <IoMdArrowBack onClick={(e) => handleBack(e)} />
      </div>

      <div className="quick-image-container">
        {quickImage.map((image, index) => {
          return (
            <div
              className="quick-image-div"
              key={index}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              // ref={(ref)=>ref=quickDivRef.current[0]}
            >
              <img src={image} alt={image} className="quick-image-image" />
            </div>
          );
        })}
      </div>
      <div className="arrow-forward" onClick={() => handleForward()}>
        <IoMdArrowForward />
      </div>
    </div>
  );
}

export default QuickImage;
