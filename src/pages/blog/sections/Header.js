import React from "react";
import img from "../../../assets/blogHeaderImg.jpg";
import Btn from "../../../components/Btn";

function Header() {
  return (
    <div className="mt-[80px]">
      <div className="flex flex-col md:flex-row mt-10 bg-gray-900">
        {/* Left Image Section */}
        <div className="relative w-full h-full md:w-[600px] md:h-[400px] flex-1">
          <img
            src={img}
            alt="Header Image"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex justify-center items-center text-center text-white">
            <h2 className="font-bold text-2xl md:text-4xl">Our Blog</h2>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="bg-black text-white flex-1 flex flex-col justify-center container">
          <p className="text-primary mb-4">Trending</p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h2>
          <p className="mb-6">
            We provide a full range of front-end mechanical repairs for all
            makes and models of cars, no matter the cause.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 pb-6 md:pb-0">
            <Btn text="Read more" />
            <span>Posted on October 6th, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
