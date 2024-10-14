import React from "react";
import Hero from "../ui/Hero";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
