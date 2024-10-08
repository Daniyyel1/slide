import React, { useState } from "react";
import { Items } from "../Data";
// import Slide from "./Slide";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";

const Slider = () => {
  const [sl, setSl] = useState(0);

  const nextSlide = () => {
    // setSl((slide) => slide + 1);
    setSl(sl === Items[0].slides.length - 1 ? 0 : sl + 1);
  };

  const prevSlide = () => {
    // setSl((slide) => slide - 1);
    setSl(sl === 0 ? Items[0].slides.length - 1 : sl - 1);
  };

  console.log(sl);

  return (
    <div className="slide-carousel">
      {Items[0].slides?.map((slide, idx) => {
        // return <Slide item={slide} key={idx} sl={sl} />;
        return (
          <img
            src={slide.img}
            alt="pic name"
            key={idx}
            className={sl === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}

      <div className="buttons">
        <BsArrowLeftCircle className="prev" onClick={prevSlide} />
        <FiArrowRightCircle className="next" onClick={nextSlide} />
      </div>
      <div className="indicators">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Slider;
