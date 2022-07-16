import React, {useState, useEffect} from "react";
import AboutCard from "../about/AboutCard";
import Hero from "./hero/Hero";
import Hblog from "./Hblog";
// import Hprice from "./Hprice";

const Home = () => {

  return (
    <div>
      <Hero />
      <AboutCard />
      <Hblog />
    </div>
  );
};

export default Home;
