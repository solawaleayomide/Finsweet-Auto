import React from "react";
import Btn from "../../../components/Btn";
import heroImg from "../../../assets/Header Image (1).png";
import { CiClock2 } from "react-icons/ci";

function Hero() {
  return (
    <div className="mt-[6rem] md:mt-[8rem] md:flex md:items-center">
      <div className="text-center md:text-start mb-7 md:mb-0 md:w-1/2">
        <h2 className="mb-5 font-bold text-4xl md:text-5xl">
          Get your vehicle service done online at one place
        </h2>
        <Btn text={"Get Started"} />

        <div className="md:flex gap-5 items-center mt-8">
          <CiClock2 className="text-2xl hidden md:block" />
          <div>
            <p className="md:text-[0.9rem]">We are open</p>
            <p className="md:font-semibold">
              Monday to Friday 9:00 AM to 10:00 AM
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto md:w-1/2">
        <img
          src={heroImg}
          alt="heroImg"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
