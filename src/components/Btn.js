import React from "react";

function Btn({ text }) {
  return (
    <div>
      <button className="bg-primary px-4 py-2 text-steelgrey rounded-md font-semibold hover:opacity-90">
        {text}
      </button>
    </div>
  );
}

export default Btn;
