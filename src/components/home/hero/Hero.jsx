import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container w-full mx-auto sm:mt-20 md:mt-0 mb-40">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-1">
          <div id="heading" className="text-white w-2/3 mx-auto">
            <h2 className="text-sky-600 brightness-110 font-semibold text-2xl text-center">
              #CerdasKreatifBersahabat
            </h2>
            <h2 className="text-center py-2 w-full font-extrabold text-4xl sm:text-4xl xl:text-6xl">
              Bersama Menjalin Ukhuwah Bersatu Dalam Dakwah
            </h2>
            <p className="font-extralight italic w-full mx-auto text-base md:text-lg xl:text-xl text-center">
              Maka sampaikanlah (Muhammad) secara terang-terangan segala apa
              yang diperintahkan (kepadamu) dan berpalinglah dari orang yang
              musyrik (QS. Al-Hijr [15]:94)
            </p>
            <div className="mt-4 space-x-2 w-full md:w-3/4 mx-auto flex justify-center flex-wrap items-center text-center">
              {/* {tags.map((tag, index) => {
                return (
                  <>
                    <span
                      index={index}
                      className="px-2 md:px-5 py-1 mt-2 mb-1 md:mb-5 text-xs md:text-sm text-white border-b-2 rounded-md shadow-md bg-pink-500 hover:bg-pink-800 border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600"
                    >
                      {tag.name}
                    </span>
                  </>
                );
              })} */}
              {/* <button className="bg-cyan-500 text-xs md:text-base py-3 cursor-pointer px-11 hover:scale-105 rounded-md max-w-sm">
                JOIN NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button> */}
              <button className="bg-cyan-500 mt-2 text-xs md:text-base py-3 cursor-pointer px-8 hover:scale-105 rounded-md max-w-sm">
                YUK KENALAN DENGAN LDK{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
