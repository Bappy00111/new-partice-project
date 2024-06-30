import React from "react";
import "./Peralex.css";
import imgOne from "../../assets/images/beautiful-nature-high-definition_042323787_304.jpg";
import imgtwo from "../../assets/images/nature-images.jpg";
import imgthree from "../../assets/images/th.jpg";
import imgfour from "../../assets/images/wc1786810.jpg";

const Peralex = () => {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <div
        className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imgOne})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white bg-slate-400 p-5 uppercase">
            parallax Website
          </p>
        </div>
      </div>
      <div className="my-10 space-y-5 text-center p-10 bg-slate-400 relative">
        <h1 className="text-2xl">Parallax Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dignissimos laboriosam sequi vitae suscipit ex ducimus non incidunt
          officiis sit voluptas nihil debitis soluta culpa illum, fugiat
          voluptatem excepturi? Rerum iste laudantium aliquam, optio repellat
          rem laborum labore ratione adipisci mollitia. Mollitia repellat
          laudantium dignissimos ea. Expedita laboriosam veniam dolor.
        </p>
      </div>
      <div
        className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imgtwo})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white bg-slate-400 p-5 uppercase">
            parallax Website
          </p>
        </div>
      </div>
      <div className="my-10 space-y-5 text-center p-10 bg-slate-400 relative">
        <h1 className="text-2xl">Parallax Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dignissimos laboriosam sequi vitae suscipit ex ducimus non incidunt
          officiis sit voluptas nihil debitis soluta culpa illum, fugiat
          voluptatem excepturi? Rerum iste laudantium aliquam, optio repellat
          rem laborum labore ratione adipisci mollitia. Mollitia repellat
          laudantium dignissimos ea. Expedita laboriosam veniam dolor.
        </p>
      </div>
      <div
        className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imgthree})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white bg-slate-400 p-5 uppercase">
            parallax Website
          </p>
        </div>
      </div>
      <div className="my-10 space-y-5 text-center p-10 bg-slate-400 relative">
        <h1 className="text-2xl">Parallax Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dignissimos laboriosam sequi vitae suscipit ex ducimus non incidunt
          officiis sit voluptas nihil debitis soluta culpa illum, fugiat
          voluptatem excepturi? Rerum iste laudantium aliquam, optio repellat
          rem laborum labore ratione adipisci mollitia. Mollitia repellat
          laudantium dignissimos ea. Expedita laboriosam veniam dolor.
        </p>
      </div>
      <div
        className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imgfour})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white bg-slate-400 p-5 uppercase">
            parallax Website
          </p>
        </div>
      </div>
      <div className="my-10 space-y-5 text-center p-10 bg-slate-400 relative">
        <h1 className="text-2xl">Parallax Two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dignissimos laboriosam sequi vitae suscipit ex ducimus non incidunt
          officiis sit voluptas nihil debitis soluta culpa illum, fugiat
          voluptatem excepturi? Rerum iste laudantium aliquam, optio repellat
          rem laborum labore ratione adipisci mollitia. Mollitia repellat
          laudantium dignissimos ea. Expedita laboriosam veniam dolor.
        </p>
      </div>
    </div>
  );
};

export default Peralex;
