import React, { useEffect } from "react";
import Header from "./sections/Header";
import ServiceSection from "./sections/ServiceSection";
import How1 from "./sections/How1";
import How2 from "./sections/How2";
import CtaCard from "../../components/CtaCard";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default Service;
