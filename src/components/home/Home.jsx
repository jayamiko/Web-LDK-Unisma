import React from "react";
import AboutCard from "../about/AboutCard";
import Hero from "./hero/Hero";
import Hblog from "./Hblog";
import OnlineCourses from "../allcourses/OnlineCourses";

const Home = () => {

  return (
    <div>
      <Hero />
      <AboutCard />
      <OnlineCourses />
      <Hblog />
    </div>
  );
};

export default Home;
