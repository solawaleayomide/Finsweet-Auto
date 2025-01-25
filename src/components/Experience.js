import React from "react";
import { Ctas } from "../datas/Home";

function Experience() {
  return (
    <div className="container mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pb-7">
        {Ctas.map((cta, _i) => {
          return (
            <div>
              <p className="mb-1 text-secondary font-bold text-[2.3rem]">
                {cta.text1}
              </p>
              <p>{cta.text2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
