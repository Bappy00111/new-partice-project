import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img
            className="w-full"
            src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2024/03/ipad_1024x500_woman_flatten_TinyJPEG_v01_AVP.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
