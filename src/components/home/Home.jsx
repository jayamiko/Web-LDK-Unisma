import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import Hero from "./hero/Hero";
// import Hprice from "./Hprice";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <Hblog />
      {/* <Hprice /> */}
    </div>
  );
};

export default Home;
