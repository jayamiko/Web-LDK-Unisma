import React from "react";
import "./about.css";
import {homeAbout} from "../../dummydata";
// import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome container mx-auto">
        <div className="container flexSB">
          <div className="left row px-12 md:px-0">
            <img src="./images/about.webp" className="h-96 w-80" alt="" />
          </div>
          <div className="row p-10">
            <h3 className="font-bold text-lg md:text-2xl text-[#1eb2a6]">
              LEARN ANYTHING
            </h3>
            <h1 className="italic text-xs md:text-base">
              Benefits About Online Learning Expertise
            </h1>
            <div className="flex flex-row md:flex-col space-x-2">
              {homeAbout.map((val) => {
                return (
                  <div className="item flex md:flexSB w-1/3 md:w-full rounded group bg-[#1eb2a6] md:bg-white">
                    <div className="md:w-80">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="flex items-center md:block">
                      <h2 className="group-hover:text-white hidden sm:flex text-sm md:text-base ml-1 font-semibold md:text-[#1eb2a6]">
                        {val.title}
                      </h2>
                      <p className="hidden md:flex ml-1">{val.desc}</p>
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
