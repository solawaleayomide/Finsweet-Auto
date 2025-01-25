import React from "react";
import headerImg from "../../../assets/Image (5).png";
import Btn from "../../../components/Btn";

function Header() {
  return (
    <div className="container mt-[80px]">
      <div className="md:flex md:h-[500px]">
        <div className="flex-1 md:h-full">
          <img src={headerImg} className="object-cover h-full" />
        </div>

        <div className="flex-1 bg-black p-8 text-white md:h-full flex flex-col justify-center">
          <h2 className="font-bold text-[2rem] mb-6">About Us</h2>
          <p className="mb-6">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does
          </p>

          <Btn text="Book Services" />
        </div>
      </div>
    </div>
  );
}

export default Header;
