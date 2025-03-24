import heroImage from "../assets/hero.jpg";
import React from "react";
import TestimonialSlider from "./HeroSlider";

function Hero() {
  return (
    <div className="h-screen bg-[url(./assets/hero.jpg)] bg-cover bg-center bg-fixed">
      <div className="w-full h-full bg-[rgba(0,0,0,0.75)]">
        <div className="flex flex-col text-center h-full justify-center">
          <h1 className="text-gray-200 text-3xl font-bold font-secondary px-3 py-2">
            Welcome To Wonderland Studios
          </h1>
          <p className="text-yellow-300 text-md font-semibold font-mono px-3 py-2">
            where creativity meets expectations!
            
          </p>

          <div className="py-3">
            <TestimonialSlider />
          </div>

       
            <div className="py-16">
              <a
                href="#"
                className="bg-teal-700 text-gray-200 font-semibold px-6 py-3 rounded-full hover:bg-teal-600 cursor-pointer"
              >
                Book A Session
              </a>
            </div>


        </div>
      </div>
    </div>
  );
}

export default Hero;
