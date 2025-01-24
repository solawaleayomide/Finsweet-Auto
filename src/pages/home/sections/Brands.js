import React from "react";
import { Brand } from "../../../datas/Home";

function Brands() {
  return (
    <div className="container mt-[5rem]">
      <div>
        <h2 className="text-[2rem] font-bold text-center">Brands we serve</h2>
      </div>

      <div className="grid grid-cols-2 md:flex justify-center">
        {Brand.map((brand, _i) => {
          return (
            <div className="w-[10rem] md:w-[12rem]">
              <img src={brand.icon} alt="brandIcon" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
