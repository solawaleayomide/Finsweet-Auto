import React from "react";
import Header from "./sections/Header";
import ServiceSection from "./sections/ServiceSection";
import How1 from "./sections/How1";
import How2 from "./sections/How2";
import CtaCard from "../../components/CtaCard";

function service() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <How1 />
      <How2 />
      <CtaCard />
    </div>
  );
}

export default service;
