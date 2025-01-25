import React from "react";
import { color } from "../../../datas/About";
import Clr from "../../../components/Clr";

function Colors() {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      {color.map((colr, _i) => {
        return (
          <Clr
            bgColor={colr.bgColor}
            img={colr.bg}
            text1={colr.text1}
            text2={colr.text2}
          />
        );
      })}
    </div>
  );
}

export default Colors;
