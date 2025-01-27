import React, { useEffect } from "react";
import Header from "./sections/Header";
import Steps from "./sections/Steps";
import Colors from "./sections/Colors";
import Features from "./sections/Features";
import CtaCard from "../../components/CtaCard";
import Team from "./sections/Team";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Steps />
      <Colors />
      <Features />
      <Team />
      <CtaCard />
    </div>
  );
}

export default About;
