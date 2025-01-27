import React, { useEffect } from "react";
import Hero from "./sections/Hero";
import Qoute from "./sections/Qoute";
import Process from "./sections/Process";
import Offer from "./sections/Offer";
import Cta from "./sections/Cta";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";
import Faqs from "./sections/Faqs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Qoute />
      <Process />
      <Offer />
      <Cta />
      <Brands />
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default Home;
