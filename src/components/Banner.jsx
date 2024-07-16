import React, { useState } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const images = [
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2024/03/ipad_1024x500_woman_flatten_TinyJPEG_v01_AVP.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/IK_OR_2048x1000_tiny.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2020/09/InsightLung_2048x1000_tiny.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2019/06/uni_vl_AR_26010619_11_1024x500_Logos_v003.jpg",
];

const Banner = () => {
  return (
    <div>
      <Swiper 
      pagination={true}
       modules={[Pagination,Autoplay]} 
       className="mySwiper"
        autoplay={{ delay: 3000 }} 
        >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="h-[calc(100vh-200px)] ">
            <img
              className="w-full h-full bg-cover bg-center"
              src={img}
              alt=""
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img
            className="w-full"
            src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/IK_OR_2048x1000_tiny.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2020/09/InsightLung_2048x1000_tiny.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2019/06/uni_vl_AR_26010619_11_1024x500_Logos_v003.jpg"
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
