import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import { useState } from "react";

import { homeCursoleData } from "../../data/homeCursoleData";

const HeroCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: ".bids-swiper-button-next",
          prevEl: ".bids-swiper-button-prev",
        }}
        className="card-slider-4-columns !py-5"
      >
        {homeCursoleData.map((item) => {
          const { id, image, title } = item;
          const itemLink = image.split("/").pop().replace(".jpg", "");
          const [isHovered, setIsHovered] = useState(false);

          return (
            <SwiperSlide className="text-white" key={id}>
              <article>
                <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500">
                  <div className="relative">
                    {/* Image */}
                    <figure
                      className={
                        isHovered ? "blur-lg transition-all duration-300" : ""
                      }
                    >
                      <Link href={"/item/" + itemLink}>
                        <Image
                          src={image}
                          alt={title}
                          height={230}
                          width={230}
                          className="rounded-[0.625rem] h-screen mt-20 w-screen object-cover"
                          loading="lazy"
                        />
                      </Link>
                    </figure>

                    {/* Text Overlay */}
                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="absolute bottom-0 left-0 ml-16 w-1/2 cursor-pointer transition-all"
                      id="textDiv"
                    >
                      <div className="bg-white bg-opacity-50 p-4 flex justify-center content-center">
                        <span>
                          <h1 className="text-3xl font-bold">{title}</h1>
                          <p
                            className={`text-m ${
                              isHovered
                                ? "block transition-all duration-300"
                                : "hidden"
                            }`}
                          >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Facilis commodi odit cupiditate hic tenetur
                            fugiat illo voluptatem culpa optio quasi ut
                            obcaecati, quisquam veniam, eligendi consequatur,
                            vitae sapiente eveniet dolor.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <!-- Slider Navigation --> */}
    </>
  );
};

export default HeroCarousel;
