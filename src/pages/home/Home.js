import React from "react";
import Hero from "./sections/Hero";
import Qoute from "./sections/Qoute";
import Process from "./sections/Process";
import Offer from "./sections/Offer";

function Home() {
  return (
    <div>
      <Hero />
      <Qoute />
      <Process />
      <Offer />
    </div>
  );
}

export default Home;
