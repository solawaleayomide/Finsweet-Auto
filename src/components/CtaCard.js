import React from "react";
import img1 from "../assets/Image 1.jpg";
import img2 from "../assets/bg1.avif";
import Btn from "../components/Btn";

function CtaCard() {
  return (
    <div>
      <div className="md:grid md:grid-cols-8">
        <div className="md:col-span-1">
          <img
            src={img1}
            alt="ctaImg1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:col-span-3">
          <div className="bg-primary h-full flex items-center px-4 py-6 md:py-0">
            <div className="pl-[1rem]">
              <h2 className="font-semibold leading-10 text-[2rem] text-white mb-[1.5rem]">
                Get in touch with us for your service related query
              </h2>
              <Btn text1="Contact us" />
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <img
            src={img2}
            alt="ctaImg2"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CtaCard;
