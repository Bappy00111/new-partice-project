import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import AnimaImg from "./components/AnimaImg";
import PeralalImg from "./components/PeralalImg";
import OurProject from "./components/OurProject";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <PeralalImg/>
      <AnimaImg/>
      <OurProject/>
    </>
  );
};

export default App;
