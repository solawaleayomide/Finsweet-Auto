import React from "react";
import { InputField, Qoutes } from "../../../datas/Home";
import Btn from "../../../components/Btn";
import CardIcon from "../../../components/CardIcon";

function Qoute() {
  return (
    <div className="bg-steelgrey">
      <div className="container py-[5rem]">
        <div className="md:flex">
          <div className="md:w-1/2 md:pr-[4rem]">
            <h2 className="text-center md:text-start text-2xl md:text-4xl font-bold mb-[3rem]">
              We are taking car servicing seriously
            </h2>

            <div>
              {Qoutes.map((qoute, _i) => {
                return (
                  <CardIcon
                    icon={qoute.icon}
                    text1={qoute.text1}
                    text2={qoute.text2}
                  />
                );
              })}
            </div>

            <div className="text-center md:text-start mb-10 md:mb-0">
              <Btn text="Know more about us" />
            </div>
          </div>

          <div className="mt-[6rem] md:mt-0 md:w-1/2 md:pl-[4rem]">
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
