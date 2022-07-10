import React from "react";
import "./about.css";
import CountUp from "react-countup";
import "./aboutCard.css";

const AboutCard = () => {
  return (
    <div className="flex mb-24 flex-col lg:pt-20 sm:flex-row sm:space-x-10 mx-auto container px-4 sm:px-0">
      <div className="w-full sm:w-2/4 py-5">
        <div className="about__img">
          <img src="/images/LDK4.jpg" alt="" />
        </div>
      </div>

      <div className="w-full sm:w-2/3">
        <div>
          <h1 className="text-cyan-500 text-2xl my-5">Apa Itu UKM LDK ?</h1>
          <p className="text-sm md:text-lg text-black">
            Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit
            Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45
            Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan
            keilmuan agama & umum, pembinaan karakter & mental, penguatan rohani
            & jasmani, penembangan prestasi, dan pengasahan kreativitas.
          </p>

          <div className="about__counter lg:flex hidden">
            <div className="d-flex gap-5 align-items-center pr-10 py-5">
              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={40} duration={2} suffix="+" />
                </span>

                <p className="counter__title text-sm">Anggota</p>
              </div>

              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={8} duration={2} suffix="" />
                </span>

                <p className="counter__title text-sm">Aktivitas Kegiatan</p>
              </div>
            </div>

            <div className=" d-flex gap-5 align-items-center pl-10 py-5">
              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={2} duration={2} suffix="K" />
                </span>

                <p className="counter__title text-sm">Followers Media Sosial</p>
              </div>

              <div className="single__counter">
                <span className="counter text-cyan-500">
                  <CountUp start={0} end={8} duration={2} suffix="" />
                </span>

                <p className="counter__title text-sm">Departemen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
