import React from "react";

function Btn({ text, text1 }) {
  return (
    <div>
      {text && (
        <button className="bg-primary px-4 py-2 text-steelgrey rounded-md font-semibold hover:opacity-90">
          {text}
        </button>
      )}

      {text1 && (
        <button className="bg-black px-4 py-2 text-steelgrey rounded-md font-semibold hover:opacity-90">
          {text1}
        </button>
      )}
    </div>
  );
}

export default Btn;
