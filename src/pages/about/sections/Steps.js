import React from "react";
import { ProcessData } from "../../../datas/Home";
import CardIcon from "../../../components/CardIcon";
import stepImg from "../../../assets/Steps Right.png";

function Steps() {
  return (
    <div className="container mt-9 md:mt-12">
      <div className="md:flex md:h-[500px]">
        <div className="flex-1 md:h-full">
          <div className="text-center md:text-start md:pr-7">
            <h2 className="font-bold text-[2rem] mb-4 leading-8">
              We Provide Expert Service and aim to have a long term with you
            </h2>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter
            </p>
          </div>

          <div className="mt-[3rem]">
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

        <div className="flex-1 md:h-full md:pl-7">
          <img
            src={stepImg}
            alt="stepImg"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
