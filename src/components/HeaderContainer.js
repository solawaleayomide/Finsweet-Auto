import React from "react";
import Btn from "./Btn";

function HeaderContainer({ headerImg, header, description }) {
  return (
    <div className="container mt-[80px]">
      <div className="md:flex md:h-[500px]">
        <div className="flex-1 md:h-full">
          <img src={headerImg} className="object-cover h-full" />
        </div>

        <div className="flex-1 bg-black p-8 text-white md:h-full flex flex-col justify-center">
          <h2 className="font-bold text-[2rem] mb-6">{header}</h2>
          <p className="mb-6">{description}</p>

          <Btn text="Book Services" />
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
