import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const SplideSlider = ({ options, slides }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, options);

      if (typeof splideInstance.mount === "function") {
        splideInstance.mount();
      } else {
        console.error("Mount function not found on splideInstance");
      }
    }
  }, [options, splideRef]);

  return (
    <div ref={splideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {slides.map((slide, index) => (
            <SplideSlide key={index}>{slide}</SplideSlide>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SplideSlider;
