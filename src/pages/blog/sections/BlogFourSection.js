import React from "react";
import { BlogFourLeftData, BlogFourRightData } from "../../../datas/Blog";

function BlogFourSection() {
  return (
    <div className="container mt-[80px]">
      <div className="flex flex-col md:flex-row gap-[5rem]">
        <div className="flex-1">
          {BlogFourRightData.map((rightData) => {
            return (
              <div>
                <div className="w-full mb-4">
                  <img
                    src={rightData.image}
                    alt="rightimage"
                    className="w-full"
                  />
                </div>
                <div className="text-center md:text-start">
                  <p className="mb-3">{rightData.text1}</p>
                  <h2 className="text-[1.5rem] font-bold mb-3">
                    {rightData.text2}
                  </h2>
                  <p>{rightData.text3}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          {BlogFourLeftData.map((leftData) => {
            return (
              <div className="flex flex-1 flex-col md:flex-row items-center gap-4 mb-[3.5rem] md:mb-4">
                {/* Left Image */}
                <div className="w-[16rem] md:w-[12rem] md:h-[12rem]">
                  <img
                    src={leftData.image}
                    alt="leftImage"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Text Content */}
                <div className="flex-1 text-center md:text-start">
                  <p className="mb-2 font-bold text-[1.6rem] leading-8">
                    {leftData.text1}
                  </p>
                  <h2>{leftData.text2}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogFourSection;
