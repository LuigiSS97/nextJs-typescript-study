import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Image } from "./styles";
import { pics } from "./utils";

export default function Carousel({ lastIndex, setCurrentIndex }) {
  useEffect(() => {
    lastIndex(pics?.length - 1);
  }, []);

  return (
    <>
      <Swiper
      spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
        // className="mySwiper"
      >
        {pics.map((pic, index) => (
          <SwiperSlide key={index}>
            <Image src={pic} alt={`especial ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
