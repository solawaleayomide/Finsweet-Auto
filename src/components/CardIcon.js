import React from "react";

function CardIcon({ icon, icon2, text1, text2 }) {
  return (
    <div>
      <div className="flex gap-7 items-start mb-8">
        {icon && <div className="bg-white p-2 rounded-full">{icon}</div>}
        {icon2 && (
          <div className="bg-secondary font-bold text-[#fff] text-2xl p-2 rounded-full">
            {icon2}
          </div>
        )}
        <div>
          <h3 className="font-bold mb-3 text-[1.2rem]">{text1}</h3>
          <p className="text-[0.9rem]">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default CardIcon;
