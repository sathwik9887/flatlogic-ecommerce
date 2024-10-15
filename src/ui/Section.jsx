import React from "react";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import Img5 from "../assets/5.png";
import Img6 from "../assets/6.png";
import Img7 from "../assets/7.png";
import Img8 from "../assets/8.png";
import Img9 from "../assets/9.png";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Section = () => {
  const assets = [
    {
      id: 1,
      category: "Lighting",
      name: "Awesome Lamp",
      price: "$40",
      img: Img1,
    },
    {
      id: 2,
      category: "Decoration",
      name: "Cool Flower",
      price: "$20",
      img: Img2,
    },
    {
      id: 3,
      category: "Lighting",
      name: "Modern Lamp",
      price: "$50",
      img: Img3,
    },
    {
      id: 4,
      category: "Furniture",
      name: "Stylish Chair",
      price: "$100",
      img: Img4,
    },
    {
      id: 5,
      category: "Decoration",
      name: "Elegant Vase",
      price: "$25",
      img: Img5,
    },
    {
      id: 6,
      category: "Furniture",
      name: "Modern Table",
      price: "$150",
      img: Img6,
    },
    {
      id: 7,
      category: "Lighting",
      name: "Vintage Lamp",
      price: "$60",
      img: Img7,
    },
    {
      id: 8,
      category: "Decoration",
      name: "Wall Art",
      price: "$35",
      img: Img8,
    },
    {
      id: 9,
      category: "Furniture",
      name: "Comfy Sofa",
      price: "$300",
      img: Img9,
    },
  ];

  return (
    <div className="lg:px-60 md:px-60 px-5">
      <div className="text-2xl font-semibold text-center mb-8">
        New Arrivals
      </div>
      <p className="w-full md:w-3/4 lg:w-3/4 mx-auto text-center text-base text-gray-600 mb-14">
        Check out our new furniture collection! Cozy sofa, fancy chair, wooden
        casket, and many more. The new collection brings an informal elegance to
        your home.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-20">
        {assets.map((asset) => (
          <div key={asset.id} className="flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src={asset.img}
                alt={asset.name}
                className="w-full object-cover mb-5 transform scale-105 transition-all duration-500 ease-linear hover:scale-100"
              />
              <div className="absolute top-16 right-3 space-y-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <FaRegHeart className="text-lg" />
                <FaSearchPlus className="text-lg" />
                <IoCartOutline className="text-lg" />
              </div>
            </div>

            <p className="text-sm text-gray-700">{asset.category}</p>
            <p className="font-semibold">{asset.name}</p>
            <p className="text-sm">{asset.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
