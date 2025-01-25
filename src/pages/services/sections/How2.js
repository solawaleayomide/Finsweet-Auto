import React from "react";
import Btn from "../../../components/Btn";
import img1 from "../../../assets/how2img.jpg";
import img2 from "../../../assets/how2iimg.jpg";

function How2() {
  return (
    <div className="container py-[4rem]">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1  mb-[12rem] md:mb-0">
          <div className="flex flex-col md:flex-row gap-2 md:h-[18rem] h-[12rem] w-full">
            <img src={img1} alt="img1" className="object-cover h-full w-full" />
            <img src={img2} alt="img2" className="object-cover h-full w-full" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-start">
          <h2 className="font-bold text-[2rem] leading-8 mb-[2rem]">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h2>
          <p className="mb-5">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>

          <Btn text="Book a service" />
        </div>
      </div>
    </div>
  );
}

export default How2;
