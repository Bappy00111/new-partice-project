import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const images = [
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2024/03/ipad_1024x500_woman_flatten_TinyJPEG_v01_AVP.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/IK_OR_2048x1000_tiny.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2020/09/InsightLung_2048x1000_tiny.jpg",
  "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2019/06/uni_vl_AR_26010619_11_1024x500_Logos_v003.jpg",
];

const Banner = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const moveX = ((clientX / offsetWidth) - 0.5) * 30; // 30px পর্যন্ত ডান-বাম সরে
    const moveY = ((clientY / offsetHeight) - 0.5) * 30; // 30px পর্যন্ত উপরে-নিচে সরে
    setTransform({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        {images?.map((img, index) => (
          <SwiperSlide
            key={index}
            className="h-[calc(100vh-200px)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-full bg-cover bg-center transition-transform duration-200 ease-out"
              src={img}
              alt=""
              style={{
                transform: `translate(${transform.x}px, ${transform.y}px)`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
