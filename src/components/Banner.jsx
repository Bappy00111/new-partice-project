import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const imageObjects = [
  {
    id: 1,
    backgroundImg:
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2024/03/big_layer_woman_tinyPNG_AVP.png",
    relativeImg: [
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/big_layer_hand_dendrite_tinyPNG_v02.png",
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/layer_viral_back_tinyPNG_v02.png",
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/big_layer_viral_front_1_tinyPNG.png",
    ],
  },
  {
    id: 2,
    backgroundImg:
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2020/09/OR_background_tinyJPG_1920x775_v002.jpg",
    relativeImg: [
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2020/09/Lung_tiny.png",
    ],
  },
  {
    id: 3,
    backgroundImg:
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/IK_OR_1920x775_BG_tiny.jpg",
    relativeImg: [
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/IK_Kidney_1000x1800.png",
    ],
  },
  {
    id: 4,
    backgroundImg:
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2019/06/uni_vl_AR_26010619_11_1024x500_Logos_v003.jpg",
    relativeImg: ["https://example.com/relative4.jpg"],
  },
  {
    id: 5,
    backgroundImg:
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/OR_background_tinyJPG_1920x775_v002.jpg",
    relativeImg: [
      "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2022/08/heart_web_tinyPNG_v002.png",
    ],
  },
];

const Banner = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const moveX = (clientX / offsetWidth - 0.5) * 70; // 30px পর্যন্ত ডান-বাম সরে
    const moveY = (clientY / offsetHeight - 0.5) * 70; // 30px পর্যন্ত উপরে-নিচে সরে
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
        {imageObjects?.map((img, index) => (
          <SwiperSlide
            key={index}
            className="h-[calc(100vh-100px)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative w-ful h-full bg-no-repeat bg-center bg-cover "
              style={{ backgroundImage: `url(${img.backgroundImg})` }}
            >
              <img
                className="absolute inset-0 w-[300px] md:w-[400px] md:ml-40 "
                src={img.relativeImg[0]}
                alt=""
                style={{
                  transform: `translate(${transform.x}px, ${transform.y}px)`,
                }}
              />
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
