import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../../image/ldk-icon.png";

const Head = () => {
  return (
    <>
      <section className="head container mx-auto md:flex space-x-3 hidden">
        <Link to="/">
          <img
            src={Logo}
            width={120}
            height={80}
            alt="logo-ldk"
            className="cursor-pointer"
          />
        </Link>
        <div className="w-full flexSB">
          <div className="logo flex flex-col my-auto">
            <h1>LEMBAGA DAKWAH KAMPUS</h1>
            <span>UNIVERSITAS ISLAM '45 BEKASI</span>
          </div>

          <div className="flex my-auto">
            <a href="https://web.facebook.com/ldkunisma.bekasi?_rdc=1&_rdr/">
              <i className="fab fa-facebook-f icon bg-blue-500 text-white hover:scale-125"></i>
            </a>
            <a href="https://www.instagram.com/ldkunisma45bekasi/">
              <i className="fab fa-instagram icon bg-pink-500 text-white hover:scale-125"></i>
            </a>
            <a href="https://twitter.com/ldk_unisma45">
              <i className="fab fa-twitter icon bg-cyan-400 text-white hover:scale-125"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCkpwGcpCbk2893j5qFyxePA">
              <i className="fab fa-youtube icon bg-red-500 text-white hover:scale-125"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
