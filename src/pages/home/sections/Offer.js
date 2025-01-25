import React from "react";
import { Offers } from "../../../datas/Home";
import { IoIosArrowRoundForward } from "react-icons/io";

function Offer() {
  return (
    <div className="bg-steelgrey">
      <div className="container">
        <div className="text-center pt-[3rem]">
          <p className="mb-6">What we offer</p>
          <h2 className="font-bold text-[2rem] leading-10">
            We offer full service auto repair & maintenance
          </h2>
        </div>

        <div className="mt-[4rem] grid grid-cols-2 md:grid-cols-4 gap-2">
          {Offers.map((offer, _i) => {
            return (
              <div
                key={_i}
                className=" bg-white w-full p-10 flex flex-col items-center justify-center text-center hover:bg-primary transition-colors duration-300"
              >
                <img src={offer.icon} alt="offerIcon" className="w-10 mb-4 " />
                <h2 className="text-[.9rem] font-semibold">{offer.text}</h2>
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 items-center justify-center md:justify-end mt-[1rem] pb-10">
          <p>Learn about services</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
}

export default Offer;
