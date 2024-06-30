import React from "react";
import img from "../../src/assets/image/original-fc60b288d29df300a527be6c93ab20a2.png";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoEyeSharp, IoHeart } from "react-icons/io5";

const Card = ({profile}) => {
    const {backgroundImage,profileImage,profileName,heartRating,eyesRating} = profile;
  return (
    <div className="h-96">
      <div className="relative  cursor-pointer group">
        <img className=" w-full h-72 object-cover rounded-md" src={backgroundImage} alt="" />
        <div className="absolute inset-0 text-white  items-end justify-between p-5 hidden group-hover:flex bg-black bg-opacity-10">
          <h2 className="font-bold text-lg">Model Agency Protfolio</h2>
          <div className="flex gap-3 ">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center ">
              <IoBookmarkOutline className="h-4 w-4 text-black" />
            </div>
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
              <FaRegHeart className="h-4 w-4 text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-2 cursor-pointer">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8 rounded-full" src={profileImage} alt="" />
          <p className="text-sm text-gray-700">{profileName}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <IoHeart className="w-4 h-4 text-gray-400 hover:text-pink-400" />
            <p className="text-sm text-gray-600">{heartRating}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoEyeSharp className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-600">{eyesRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
