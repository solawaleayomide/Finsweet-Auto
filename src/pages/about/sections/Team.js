import React from "react";
import { TeamData } from "../../../datas/About";

function Team() {
  return (
    <div className="container py-12 mb-10">
      <h2 className="font-bold text-[2.3rem] mb-[3rem] md:mb-[4.2rem] text-center">
        Meet Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TeamData.map((data) => {
          return (
            <div className="w-[22rem]">
              <img src={data.image} />
              <div className="bg-black p-2 text-white text-center">
                <h2 className="text-[1.2rem] font-bold">{data.name}</h2>
                <p>{data.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
