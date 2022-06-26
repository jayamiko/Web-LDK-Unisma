import React from "react";
import "./about.css";
import CountUp from "react-countup";
import "./aboutCard.css";

const AboutCard = () => {
  return (
    <div className="flex mb-24 mx-auto container">
      <div className="w-2/4 py-5">
        <div className="about__img">
          <img src="/images/LDK4.jpg" alt="" />
        </div>
      </div>

      <div className="w-2/3">
        <div className="about__content">
          <h1 className="text-cyan-500 text-2xl my-5">Apa Itu UKM LDK ?</h1>
          <p className="text-sm md:text-lg text-black">
            Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit
            Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45’
            Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan
            keilmuan agama & umum, pembinaan karakter & mental, penguatan rohani
            & jasmani, penembangan prestasi, dan pengasahan kreativitas.
          </p>

          <div className="about__counter lg:flex hidden">
            <div className="d-flex gap-5 align-items-center pr-10 py-5">
              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={25} duration={2} suffix="K" />
                </span>

                <p className="counter__title text-sm">Completed Projects</p>
              </div>

              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={12} duration={2} suffix="M" />
                </span>

                <p className="counter__title text-sm">Patient Around World</p>
              </div>
            </div>

            <div className=" d-flex gap-5 align-items-center pl-10 py-5">
              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={95} duration={2} suffix="M" />
                </span>

                <p className="counter__title text-sm">Ideas Raised Funds</p>
              </div>

              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={5} duration={2} suffix="K" />
                </span>

                <p className="counter__title text-sm">Categories Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
