import React from "react";

const OurProject = () => {
  const images = [
    {
      id: 1,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/GDA_Winner_v001_1000x1000_2022-1000x1000.jpg",
      size: "big",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 2,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2018/04/portfolio_02.jpg",
      size: "horijontal",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 3,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/portfolio3.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 4,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/portfolio4.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 5,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/portfolio5.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 6,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2016/05/portfolio_06_preview_02.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 7,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/10/portfolio_2.jpg",
      size: "horijontal",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 8,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2018/05/284_Iberogast.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 9,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2018/05/270_Teriflunomid.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
    {
      id: 10,
      url: "https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2018/05/252_BI_Vargatef.jpg",
      size: "",
      tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repudiandae?",
    },
  ];

  return (
    <div className="my-10 ">
      <h1 className="text-4xl font-bold py-10 text-center font-[inter]">
        Take a look at some of our projects
      </h1>
      <div className="grid grid:cols-1 md:grid-cols-5 grid-flow-dense py-5 ">
       
        {images.map((image) => (
          <div
            key={image?.id}
            className={`${image?.size=='big'?'row-span-2 col-span-2':image.size=='horijontal'?'col-span-2':""} overflow-hidden bg-slate-800 relative group w-full` }
          >
            <img
              className="transition duration-1000 ease-out hover:translate-x-14 hover:translate-y-10 z-10  w-full"
              src={image?.url}
              alt=""
            />
            <h1 className="hidden group-hover:flex absolute top-1 left-1 text-white p-4">
              {image?.tittle}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProject;
