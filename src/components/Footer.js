import React from "react";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { footer } from "../datas/Home";

function Footer() {
  return (
    <div className="bg-black opacity-85">
      <div className="container">
        <div className="py-8 md:flex justify-between">
          <div className="text-center md:text-start">
            <h2 className="font-bold text-white text-[2rem]">
              Get in touch with us for your service
            </h2>

            <div className="flex gap-4 text-white mt-9 md:mt-4 mx-auto text-[1.5rem] justify-center md:justify-start ">
              <MdFacebook />
              <MdWhatsapp />
              <MdFacebook />
              <MdWhatsapp />
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:text-start text-center">
            {footer.map((data) => {
              return (
                <div className="mb-8 text-white">
                  <p className="mb-2">{data.text1}</p>
                  <h2 className="font-bold">{data.text2}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
