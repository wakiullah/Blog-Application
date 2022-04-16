import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <div className="bg-gray-50">
      <div div className="container mx-auto py-20">
        <div className="text-center text-gray-600 font-bold text-3xl mb-16">
          <h2>{`Our clint's`}</h2>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={true}
        >
          <SwiperSlide>
            <Image
              src="/twitter.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/twitter.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/bmw.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/lays.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/bmw.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/twitter.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/bmw.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/lays.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/bmw.png"
              alt="BMW LOGO"
              width="100%"
              height="100%"
              className="grayscale"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}







