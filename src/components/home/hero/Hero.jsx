import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container w-5/6 mx-auto">
          <div className="mt-60 md:mt-80 grid grid-cols-1 lg:grid-cols-2">
            <div id="heading" className="font-semibold">
              <h2 className="text-sky-600">WELCOME TO LDK</h2>
              <h2 className="text-3xl w-full py-2 sm:w-4/5 lg:w-full sm:text-4xl md:text-5xl">
                Bersama Menjalin Ukhuwah Bersatu Dalam Dakwah
              </h2>
              <i className="font-extralight text-xs md:text-base">
                Maka sampaikanlah (Muhammad) secara terang-terangan segala apa
                yang diperintahkan (kepadamu) dan berpalinglah dari orang yang
                musyrik <br />
                (QS. Al-Hijr [15]:94)
              </i>
              <div className="mt-8 space-x-2">
                <button className="primary-btn text-xs md:text-base py-3 px-3 md:p-4 rounded-md max-w-sm">
                  STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button className="bg-sky-600 text-xs md:text-base py-3 px-3 md:p-4 rounded-md max-w-sm">
                  LIHAT ANGGOTA <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
