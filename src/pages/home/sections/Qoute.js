import React from "react";
import { InputField, Qoutes } from "../../../datas/Home";
import Btn from "../../../components/Btn";

function Qoute() {
  return (
    <div className="bg-steelgrey">
      <div className="container py-[4rem]">
        <div className="md:flex">
          <div className="md:w-1/2 md:pr-[4rem]">
            <h2 className="text-center md:text-start text-2xl md:text-4xl font-bold mb-[3rem]">
              We are taking car servicing seriously
            </h2>

            <div>
              {Qoutes.map((qoute, _i) => {
                return (
                  <div className="flex gap-7 items-start mb-8">
                    <div className="bg-white p-2 rounded-full">
                      {qoute.icon}
                    </div>

                    <div>
                      <h3 className="font-bold mb-3 text-[1.2rem]">
                        {qoute.text1}
                      </h3>
                      <p className="text-[0.9rem]">{qoute.text2}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center md:text-start mb-10 md:mb-0">
              <Btn text="Know more about us" />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-[4rem]">
            <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold mb-[3rem]">
              Get a quote for the car service
            </h2>

            <div>
              {InputField.map((input, _i) => {
                return (
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder={input.text}
                      className="px-5 py-3 rounded-md w-full"
                    />
                  </div>
                );
              })}
            </div>

            <div className="text-center md:text-start mb-10 md:mb-0">
              <Btn text="Get your quote" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qoute;
