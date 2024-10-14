import React, { useState } from "react";
import Logo from "../assets/react.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropDownVisible, setDropdownVisible] = useState(false);
  const [isDropDown, setDropdown] = useState(false);
  const [isDrop, setDrop] = useState(false);

  return (
    <div className="flex justify-between items-center lg:px-60 md:px-60 px-5 py-5 bg-white shadow-xl">
      <a href="">
        <h1 className="text-lg font-bold">Flatlogic</h1>
      </a>
      <ul className="hidden lg:flex items-center space-x-8">
        <NavLink to="/">
          <div className="flex justify-between items-center space-x-3 group">
            <div className="border-l-8 border group-hover:border-amber-700 transition-all duration-300 ease-in-out"></div>
            <li className="text-sm cursor-pointer group-hover:text-amber-700 transition-all duration-300 ease-in-out">
              Home
            </li>
          </div>
        </NavLink>

        <NavLink to="/products">
          <div className="flex items-center justify-center space-x-1">
            <div
              className="flex justify-between items-center space-x-3 group"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <div className="border-l-8 border group-hover:border-amber-700 transition-all duration-300 ease-in-out"></div>
              <div className="flex justify-center items-center space-x-1 hover:text-amber-700">
                <li className="text-sm cursor-pointer group-hover:text-amber-700 transition-all duration-300 ease-in-out">
                  Pages
                </li>
                <MdOutlineKeyboardArrowDown className="text-base" />
              </div>
            </div>

            {isDropDownVisible && (
              <div className="absolute top-16    mt-2 bg-white border rounded-md shadow-lg group">
                <ul className="py-2 px-10 transition-all duration-300 ease-out">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page1">About Us</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page2">About Team</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">Contact Us</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">FAQ</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">404</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">Wishlist</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">Login</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </NavLink>

        <NavLink to="/about">
          <div className="flex items-center justify-center space-x-1">
            <div
              className="flex justify-between items-center space-x-3 group"
              onMouseEnter={() => setDropdown(true)} // Show dropdown on hover
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="border-l-8 border group-hover:border-amber-700 transition-all duration-300 ease-in-out"></div>
              <div className="flex justify-center items-center space-x-1 hover:text-amber-700">
                <li className="text-sm cursor-pointer group-hover:text-amber-700 transition-all duration-300 ease-in-out">
                  Shop
                </li>
                <MdOutlineKeyboardArrowDown className="text-base" />
              </div>
            </div>
            {isDropDown && (
              <div className="absolute top-16   mt-2 bg-white border rounded-md shadow-lg group">
                <ul className="py-2 px-10 transition-all duration-300 ease-out">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page1">Shop</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page2">Categories</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page3">Account</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </NavLink>
        <NavLink to="/contact">
          <div className="flex items-center justify-center space-x-1">
            <div
              className="flex justify-between items-center space-x-3 group"
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <div className="border-l-8 border group-hover:border-amber-700 transition-all duration-300 ease-in-out"></div>
              <div className="flex justify-center items-center space-x-1 hover:text-amber-700">
                <li className="text-sm cursor-pointer group-hover:text-amber-700 transition-all duration-300 ease-in-out">
                  Blog
                </li>
                <MdOutlineKeyboardArrowDown className="text-base" />
              </div>
            </div>
            {isDrop && (
              <div className="absolute top-16   mt-2 bg-white border rounded-md shadow-lg group">
                <ul className="py-2 px-10 transition-all duration-300 ease-out">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page1">Blog</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/products/page2">Blog Articles</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </NavLink>
      </ul>
      <div className="flex justify-center items-center space-x-8">
        <FaSearch className="hidden lg:block" />
        <FaUser className="hidden lg:block" />
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Navbar;
