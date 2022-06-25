import React from "react";
import "./about.css";
import {homeAbout} from "../../dummydata";
// import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="">
          <div className="p-10 border-2">
            <h3 className="font-bold text-lg text-center md:text-4xl text-cyan-500 brightness-105">
              Departemen LDK Al-Ukhuwah
            </h3>
            <h1 className="italic text-xs md:text-sm text-white text-center">
              Benefits About Online Learning Expertise
            </h1>
            <div className="grid grid-cols-3 w-full md:flex-col space-x-2">
              {homeAbout.map((val) => {
                return (
                  <div className="item flex md:flexSB w-1/3 md:w-full rounded group bg-white hover:bg-cyan-500">
                    <div className="md:w-80">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="flex items-center md:block">
                      <h2 className="group-hover:text-white hidden sm:flex text-sm md:text-base ml-1 font-semibold md:text-cyan-500">
                        {val.title}
                      </h2>
                      <p className="hidden md:flex ml-1 text-sm italic">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
