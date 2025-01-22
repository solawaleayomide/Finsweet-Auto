import React from "react";
import Btn from "../../../components/Btn";
import { ProcessData } from "../../../datas/Home";
import CardIcon from "../../../components/CardIcon";

function Process() {
  return (
    <div className="container py-[5rem]">
      <div className="md:flex">
        <div className="md:w-1/2 md:pr-[4rem]">
          <h2 className="text-center md:text-start text-2xl md:text-4xl font-bold mb-[2rem]">
            We follow a clear process to help you out.
          </h2>

          <p className="text-center md:text-start mb-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire
          </p>

          <div className="text-center md:text-start mb-10 md:mb-0">
            <Btn text="Learn more" />
          </div>
        </div>

        <div className="mt-[5rem] md:mt-0 md:pr-[10rem] md:pl-[2rem]">
          {ProcessData.map((process, _i) => {
            return (
              <CardIcon
                icon2={process.icon}
                text1={process.text1}
                text2={process.text2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Process;
