import React from "react";
import { FeaturesData } from "../../../datas/About";
import FeatureCard from "../../../components/FeatureCard";
import Experience from "../../../components/Experience";

function Features() {
  return (
    <div className="bg-steelgrey">
      <div className="container py-[6rem]">
        <h2 className="font-bold text-[2rem] leading-8 mb-[5rem] text-center">
          Services we provide to our valued customers
        </h2>

        <div className="flex flex-col md:flex-row gap-1">
          {FeaturesData.map((feature, _i) => {
            return (
              <FeatureCard
                icon={feature.icon}
                heading={feature.text1}
                description={feature.text2}
              />
            );
          })}
        </div>

        <div className="mt-[5rem]">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Features;
