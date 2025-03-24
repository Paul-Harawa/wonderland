import React, { useState, useEffect } from "react";
import { FaCamera, FaRing } from "react-icons/fa";

import { TbCaptureFilled } from "react-icons/tb";
import { PiClover } from "react-icons/pi";
import { GiLovers } from "react-icons/gi";


const testimonials = [
  {
    text: "Capture every moment.",
    icon: <TbCaptureFilled />
  },
  {
    text: "Cherish every minute.",
    icon: <GiLovers />
  },
  {
    text: "Visualize your memories.",
    icon: <PiClover />
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="mx-auto p-6 bg-transparent">
      <div className="flex flex-col items-center">
        <p className="text-md italic text-teal-100 mb-4">
          {testimonials[currentIndex].text}
        </p>
        <p className="text-teal-100 text-5xl">
          {testimonials[currentIndex].icon}
        </p>
      </div>
    </div>
  );
}