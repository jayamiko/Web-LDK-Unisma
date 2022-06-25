import React from "react";
import "../blog/blog.css";
import {blog} from "../../dummydata";

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className="blog container mx-auto mb-20">
        <div className="container">
          <h3 className="font-bold uppercase text-base my-2 md:text-2xl text-[#1eb2a6]">
            Info News
          </h3>
          <div className="grid2">
            {blog.slice(0, 6).map((val) => (
              <div className="items rounded-md overflow-hidden hover:scale-105 hover:shadow-md hover:border border-cyan-500 hover:shadow-cyan-500/50">
                <div className="h-64 max-h-64 relative">
                  <img src={val.cover} alt="" className="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p className="text-sm">{val.desc}</p>
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
