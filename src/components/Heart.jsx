import React from "react";
import hart from "../assets/anima-images/IH_ArtWork_1920x1100.jpg";
import { TbBox } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Heart = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto">
      <div
        className="min-h-screen relative bg-fixed bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${hart})` }}
      >
        <div className=" absolute inset-0 overflow-y-auto ">
          <div className=" text-white text-center">
            <h2 className="text-2xl md:text-4xl py-32 font-bold tracking-wide">
              Recognized expert for
            </h2>
            <div className="md:flex flex-wrap justify-center gap-20">
              <div className="text-center space-y-10 md:space-y-16 p-2 w-full md:w-auto">
                <span>
                  <img className="mx-auto" src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/Cube04.png" alt="" />
                </span>
                <p className="md:text-2xl  font-bold tracking-wide">
                  3D Medical Animation
                </p>
              </div>
              <div className="md:text-center space-y-10 md:space-y-16 p-2 w-full md:w-auto">
                <span>
                  <img className="mx-auto"  src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/Mobile03.png" alt="" />
                </span>
                <p className="md:text-2xl  font-bold tracking-wide">
                Augmented Reality
                </p>
              </div>
              <div className="text-center space-y-10 md:space-y-16 p-2 w-full md:w-auto ">
                <span>
                  <img className="mx-auto"  src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/Hololens03.png" alt="" />
                </span>
                <p className="md:text-2xl  font-bold tracking-wide">
                Mixed Reality
                </p>
              </div>
              <div className="text-center space-y-10 md:space-y-16 p-2 w-full md:w-auto ">
                <span>
                  <img className="mx-auto"  src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/VR03.png" alt="" />
                </span>
                <p className="md:text-2xl  font-bold tracking-wide">
                Virtual Reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Heart;
