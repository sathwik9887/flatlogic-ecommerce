import React from "react";
import Slider from "react-slick";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { id: 1, src: Hero1, alt: "Image 1" },
    { id: 2, src: Hero2, alt: "Image 2" },
    { id: 3, src: Hero3, alt: "Image 3" },
  ];

  return (
    <div className="overflow-hidden relative mb-16">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover md:h-[500px] lg:h-[600px] sm:w-full sm:h-[450px]"
              />
              <div className="lg:px-60 md:px-60 px-5 absolute top-40">
                <div className="flex flex-col space-y-4">
                  <div className="text-amber-900 text-xs md:text-sm lg:text-sm font-bold uppercase">
                    CHAIR
                  </div>
                  <div className="text-black text-2xl md:text-4xl lg:text-4xl font-normal">
                    get all
                  </div>
                  <div className="text-black text-2xl md:text-4xl lg:text-4xl font-bold uppercase pb-5">
                    The Good Stuff
                  </div>
                  <div className="relative flex justify-center items-center space-x-2 border border-amber-800 py-3 lg:w-52 md:w-52 w-36 group overflow-hidden">
                    <div className="absolute inset-0 bg-amber-800 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                    <p className="lg:text-base md:text-base text-sm uppercase relative z-10 text-amber-800 group-hover:text-white transition-all duration-300 ease-in-out">
                      View More
                    </p>
                    <FaArrowRightLong className="relative z-10 text-amber-800 group-hover:text-white transition-all duration-300 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
