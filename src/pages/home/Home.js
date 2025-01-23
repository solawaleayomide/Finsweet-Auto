import React from "react";
import Hero from "./sections/Hero";
import Qoute from "./sections/Qoute";
import Process from "./sections/Process";
import Offer from "./sections/Offer";
import Cta from "./sections/Cta";

function Home() {
  return (
    <div>
      <Hero />
      <Qoute />
      <Process />
      <Offer />
      <Cta />
    </div>
  );
}

export default Home;
