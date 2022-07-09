import React from "react";
import {tags} from "../../../dummydata";

function TitlePage(props) {
  return (
    <div className="container mx-auto px-4 sm:px-0 text-slate-200 flex flex-col items-end justify-end h-4/5 md:h-2/3 py-10">
      <h1 className="uppercase text-4xl font-titan tracking-wide">
        {props.title}
      </h1>
      <span className="text-xl tracking-widest my-1">
        LDK Al-Ukhuwah Unisma '45 Bekasi
      </span>
      <div className="flex flex-wrap justify-end space-x-2 w-2/5">
        {tags.map((tag) => {
          return <span className="text-sm">{tag.name}</span>;
        })}
      </div>
    </div>
  );
}

export default TitlePage;
