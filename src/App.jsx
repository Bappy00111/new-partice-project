import React from "react";
import Card from "./components/Card";
import Marquee from "react-fast-marquee";
import Peralex from "./components/peralax/Peralex";
import Heart from "./components/Heart";
import Background from "./components/Background";
import OurProject from "./components/OurProject";

const App = () => {
  const profiles = [
    {
      id: 1,
      backgroundImage:
        "https://cdn.dribbble.com/userupload/11098998/file/original-fc60b288d29df300a527be6c93ab20a2.png?resize=752x",
      profileImage:
        "https://cdn.dribbble.com/users/10855681/avatars/normal/d033d2690d2fb47476bcd48f499c349b.png?1698734557",
      profileName: "John Doe",
      heartRating: 4.5,
      eyesRating: 3.8,
    },
    {
      id: 2,
      backgroundImage:
        "https://cdn.dribbble.com/userupload/4278845/file/original-0057a5fcf564c6162d896bfd8ef86482.jpeg?resize=752x",
      profileImage:
        "https://cdn.dribbble.com/users/10855681/avatars/normal/d033d2690d2fb47476bcd48f499c349b.png?1698734557",
      profileName: "Jane Smith",
      heartRating: 4.8,
      eyesRating: 4.2,
    },
    {
      id: 3,
      backgroundImage:
        "https://cdn.dribbble.com/users/978251/screenshots/2938169/projects.jpg",
      profileImage:
        "https://cdn.dribbble.com/users/10855681/avatars/normal/d033d2690d2fb47476bcd48f499c349b.png?1698734557",
      profileName: "Alice Johnson",
      heartRating: 3.9,
      eyesRating: 4.0,
    },
    {
      id: 4,
      backgroundImage:
        "https://cdn.dribbble.com/users/6277478/screenshots/15468231/media/6e2fdfb93fd9b0b15775149965a7ef57.png?resize=450x338&vertical=center",
      profileImage:
        "https://cdn.dribbble.com/users/10855681/avatars/normal/d033d2690d2fb47476bcd48f499c349b.png?1698734557",
      profileName: "Robert Brown",
      heartRating: 4.3,
      eyesRating: 4.1,
    },
    {
      id: 5,
      backgroundImage:
        "https://cdn.dribbble.com/userupload/15201552/file/original-986dce219d50dbf44706d693c2a9d215.jpg?resize=450x338&vertical=center",
      profileImage:
        "https://cdn.dribbble.com/users/10855681/avatars/normal/d033d2690d2fb47476bcd48f499c349b.png?1698734557",
      profileName: "Emily Davis",
      heartRating: 4.7,
      eyesRating: 4.5,
    },
  ];

  return (
    <>
      {/* <Peralex/> */}
      {/* <Heart/>
      <Background/> */}
      <OurProject/>
    </>
    // <Marquee>
    //   <div className="m-5 flex gap-8">
    //     {profiles.map((profile) => (
    //       <Card key={profile.id} profile={profile}></Card>
    //     ))}
    //   </div>
    // </Marquee>
  );
};

export default App;
