import React, { useState } from "react";
import { SlideWrapper } from "./style";

const Slide = ({ item, idx, sl }) => {
  // const [slide, setSlide] = useState();

  return (
    <SlideWrapper>
      <div className="slideWrapper">
        <img
          src={item.img}
          alt="img"
          key={idx}
          className={sl === idx ? "slide" : "slide slide-hidden"}
        />
      </div>
    </SlideWrapper>
  );
};

export default Slide;
