import React from "react";
import "../blog/blog.css";
import {blog} from "../../dummydata";

const Hblog = () => {
  return (
    <>
      <section className="blog container mx-auto mb-20">
        <div className="container">
          <h3 className="font-bold px-5 sm:px-0 uppercase text-base my-2 md:text-2xl text-[#1eb2a6]">
            Info News
          </h3>
          <div className="px-5 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blog.slice(0, 6).map((val) => (
              <div className="items rounded-md overflow-hidden hover:scale-105 hover:shadow-md hover:border hover:shadow-cyan-500/50">
                <div className="h-64 max-h-64 relative">
                  <img src={val.cover} alt="" className="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span className="text-gray-700">
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span className="text-orange-400">
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                  </div>
                  <h1 className="text-cyan-500 font-bold">{val.title}</h1>
                  <p className="text-sm text-black">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
