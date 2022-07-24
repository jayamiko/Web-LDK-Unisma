import React from "react";
import "./Hero.css";

const Hero = ({bgHero}) => {
  return (
    <section className={`${bgHero} -z-10`}></section>
  );
};

export default Hero;
