import React from "react";
import "./Hero.css";

const Hero = ({bgHero}) => {
  return (
    <div className={`${bgHero} -z-10`}></div>
  );
};

export default Hero;
