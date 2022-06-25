import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-500">
        <div className="container mx-auto flexSB py-10">
          <div className="box logo w-1/4">
            <h2 className="text-xl font-bold w-fit text-white">
              LDK Al-Ukhuwah
            </h2>
            <span className="italic w-fit text-white">
              Universitas Islam '45 Bekasi
            </span>
            <p className="text-sm w-4/5 text-white">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <div className="social flex my-auto">
              <i className="fab fa-facebook-f icon bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:scale-125"></i>
              <i className="fab fa-instagram icon bg-pink-500 text-white hover:text-pink-500 hover:bg-white hover:scale-125"></i>
              <i className="fab fa-twitter icon bg-cyan-400 text-white hover:text-cyan-400 hover:bg-white hover:scale-125"></i>
              <i className="fab fa-youtube icon bg-red-500 text-white hover:text-red-500 hover:bg-white hover:scale-125"></i>
            </div>
          </div>

          <div className="box last w-1/4 text-white">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Jl. Cut Meutia No. 83 Bekasi Timur
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                0855-9163-3631
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                ldkunismabekasi@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="text-center text-white bg-gray-700 py-5 italic">
        <p className="text-sm">
          Copyright @ 2022 LDK Al-Ukhuwah UNISMA BEKASI All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
