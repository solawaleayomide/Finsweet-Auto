import React from "react";

function Clr({ img, text1, text2, bgColor }) {
  return (
    <div
      className={`relative md:w-[600px] h-[350px] md:h-[400px] overflow-hidden ${bgColor} md:mt-[5rem]`}
    >
      <div className="absolute top-0 opacity-20 object-cover md:h-[400px] inset-0">
        <img src={img} alt="imag" />
      </div>
      <div className="absolute inset-0 text-white container flex flex-col justify-center text-center">
        <h2 className="font-bold text-[2rem] leading-8 mb-3">{text1}</h2>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default Clr;
