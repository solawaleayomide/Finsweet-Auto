import React from "react";
import serviceImg from "../../../assets/serviceImage.jpg";
import { Offers } from "../../../datas/Service";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceSection() {
  return (
    <div className="bg-steelgrey">
      <div className="container py-[4rem]">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="bg-white rounded-md text-center md:text-start p-5 flex-1">
            <div className="w-full md:h-[300px] bg-red-500">
              <img
                src={serviceImg}
                alt="serviceImg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-[1.5rem] font-bold mb-3">Auto Diagnostics</h2>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic. Through True Rich Attended does no end it his
                mother.{" "}
              </p>
            </div>

            <div className="flex gap-3 items-center mt-4 text-center">
              <p className="text-center md:text-start">See service details</p>
              {/* <FaArrowRightLong /> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-1">
            {Offers.map((offer, _i) => {
              return (
                <div
                  key={_i}
                  className=" bg-white w-full p-10 flex flex-col items-center justify-center text-center hover:bg-primary transition-colors duration-300"
                >
                  <img
                    src={offer.icon}
                    alt="offerIcon"
                    className="w-10 mb-4 "
                  />
                  <h2 className="text-[.9rem] font-semibold">{offer.text}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
