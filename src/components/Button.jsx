import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <div className="relative flex justify-center items-center space-x-2 border border-amber-800 py-3 lg:w-52 md:w-52 w-36 group overflow-hidden">
      <div className="absolute inset-0 bg-amber-800 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
      <p className="lg:text-base md:text-base text-sm uppercase relative z-10 text-amber-800 group-hover:text-white transition-all duration-300 ease-in-out">
        View More
      </p>
      <FaArrowRightLong className="relative z-10 text-amber-800 group-hover:text-white transition-all duration-300 ease-in-out" />
    </div>
  );
};

export default Button;
