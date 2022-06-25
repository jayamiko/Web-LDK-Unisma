import React from "react";
import Logo from "../../../image/ldk-icon.png";

const Head = () => {
  return (
    <>
      <section className="head container mx-auto md:flex space-x-3 hidden">
        <img src={Logo} width={120} height={70} alt="logo-ldk" />
        <div className="w-full flexSB">
          <div className="logo flex flex-col my-auto">
            <h1>LEMBAGA DAKWAH KAMPUS</h1>
            <span>UNIVERSITAS ISLAM '45 BEKASI</span>
          </div>

          <div className="social flex my-auto">
            <i className="fab fa-facebook-f icon hover:bg-blue-500 hover:text-white text-blue-500 bg-white hover:scale-125"></i>
            <i className="fab fa-instagram icon hover:bg-pink-500 hover:text-white text-pink-500 bg-white hover:scale-125"></i>
            <i className="fab fa-twitter icon hover:bg-cyan-400 hover:text-white text-cyan-400 bg-white hover:scale-125"></i>
            <i className="fab fa-youtube icon hover:bg-red-500 hover:text-white text-red-500 bg-white hover:scale-125"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
