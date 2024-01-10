import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./card";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import { slider_data } from "../data/SliderData";

function SliderMain() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500, // Time in milliseconds before changing the slide
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true, // Optional, for dynamic bullets
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>"; // Optional, for custom bullet text
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Add Autoplay here
        className="swiper_container"
      >
        {slider_data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Card sliderData={[item]} />{" "}
            {/* Pass each data item as a single-element array */}
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <MdKeyboardArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <MdKeyboardArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="swiper-pagination"></div> {/* Pagination container */}
      </Swiper>
    </div>
  );
}

export default SliderMain;
