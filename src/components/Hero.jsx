
import heroImage from "../assets/hero.jpg";
import React, { useState } from "react";
import TestimonialSlider from "./HeroSlider";


function Hero() {
  return (
    <div className="h-screen bg-[url(./assets/hero.jpg)] bg-cover bg-center bg-fixed">
      <div className="w-full h-full bg-[rgba(0,0,0,0.75)]">
        <div className="flex flex-col text-center h-full justify-center space-y-7">
          <h1 className="text-gray-200 text-3xl font-bold font-secondary">
            Welcome To Wonderland Studios
          </h1>
          <p className="text-yellow-300 text-md font-semibold font-mono">
            where creativity meets expectations!
          </p>
          <div className="pt-10">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
