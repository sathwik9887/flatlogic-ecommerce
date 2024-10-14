import React from "react";
import Logo from "../assets/react.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center lg:px-28 md:px-28 px-5 py-5 bg-orange-200">
      <img src={Logo} alt="Logo" />
      <ul className="flex items-center space-x-5">
        <NavLink to="/">
          <li className="text-lg cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/products">
          <li className="text-lg cursor-pointer">Products</li>
        </NavLink>

        <NavLink to="/about">
          <li className="text-lg cursor-pointer">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="text-lg cursor-pointer">Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li className="text-lg cursor-pointer">Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/about")}> Get Started</button>
    </div>
  );
};

export default Navbar;
