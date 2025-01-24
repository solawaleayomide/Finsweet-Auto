import React from "react";
import Hero from "./sections/Hero";
import Qoute from "./sections/Qoute";
import Process from "./sections/Process";
import Offer from "./sections/Offer";
import Cta from "./sections/Cta";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Qoute />
      <Process />
      <Offer />
      <Cta />
      <Brands />
      <Testimonials />
    </div>
  );
}

export default Home;
