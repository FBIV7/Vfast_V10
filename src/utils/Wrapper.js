import React from "react";
import Slider from "../pages/Slider";
import Verification from "../pages/Verification";
import About from "../pages/About";
import Services from "../pages/Services";
import Landing from "../pages/Landing";
import Contact from "../pages/Contact";

function Wrapper() {
  return (
    <div>
      
      <Slider />
      <Verification />
      <About />
      <Services />
      <Landing />
      <Contact />
    </div>
  );
}

export default Wrapper;
