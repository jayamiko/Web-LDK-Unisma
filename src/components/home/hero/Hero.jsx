import React from "react";
import AboutCard from "../../about/AboutCard";
import Header from "../../common/header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="container w-full mx-auto mb-40">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-1">
          <div id="heading" className="font-semibold w-2/3 mx-auto">
            <h2 className="text-sky-600 brightness-110 text-xl text-center">
              WELCOME TO LDK
            </h2>
            <h2 className="text-3xl text-center py-2 w-full sm:text-4xl md:text-5xl">
              Bersama Menjalin Ukhuwah Bersatu Dalam Dakwah
            </h2>
            <p className="font-extralight italic w-4/5 mx-auto text-xs md:text-sm text-center">
              Maka sampaikanlah (Muhammad) secara terang-terangan segala apa
              yang diperintahkan (kepadamu) dan berpalinglah dari orang yang
              musyrik <br />
              (QS. Al-Hijr [15]:94)
            </p>
            <div className="mt-4 sm:space-x-2 mx-auto text-center z-50 relative">
              <button className="bg-cyan-500 text-xs md:text-base py-3 cursor-pointer px-11 hover:scale-105 rounded-md max-w-sm">
                JOIN NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bg-orange-400 mt-2 text-xs md:text-base py-3 cursor-pointer px-8 hover:scale-105 rounded-md max-w-sm">
                TENTANG LDK <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
