import React from "react";
import { HowData } from "../../../datas/Service";
import CardIcon from "../../../components/CardIcon";
import { IoMdCheckmark } from "react-icons/io";
import img1 from "../../../assets/howimg2.jpg";
import img2 from "../../../assets/howimg1.jpg";

function How1() {
  return (
    <div className="container py-[4rem]">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="font-bold text-[2rem] mb-7 text-center md:text-start leading-8">
            How we work and the process we follow
          </h2>

          <div>
            {HowData.map((data) => {
              return (
                <div>
                  <CardIcon icon3={<IoMdCheckmark />} text2={data.text} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 mb-[8rem] md:mb-0">
          <div className="flex flex-col md:flex-row gap-2 md:h-[18rem] h-[12rem] md:w-full">
            <img src={img1} alt="img1" className="object-cover h-full w-full" />
            <img src={img2} alt="img2" className="object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default How1;
