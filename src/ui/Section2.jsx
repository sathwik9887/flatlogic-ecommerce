import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-neutral-100">
      <div className="lg:px-60 md:px-60 px-5 text-center lg:text-left">
        <div className="flex flex-col justify-start items-center lg:items-start space-y-5">
          <p className="uppercase">news and inspiration</p>
          <p className="uppercase">new arrivals</p>
        </div>
      </div>
      <img
        src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/promo.095c8408.png"
        alt="PIC"
        className="hidden lg:block pt-4"
      />
    </div>
  );
};

export default Section2;
