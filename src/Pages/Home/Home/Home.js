import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
