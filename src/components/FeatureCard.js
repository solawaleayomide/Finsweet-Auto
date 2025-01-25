import React from "react";

function FeatureCard({ icon, description, heading }) {
  return (
    <div className="text-center bg-white p-7 rounded-md">
      <div className="rounded-full w-fit p-2 mb-4 bg-[#FFDACE] mx-auto">
        {icon}
      </div>

      <h2 className="font-bold text-[1.2rem] mb-2">{heading}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
