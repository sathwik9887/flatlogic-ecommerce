import React from "react";
import Hero from "../ui/Hero";
import Button from "../components/Button";
import Section from "../ui/Section";
import { Outlet } from "react-router";
import Section2 from "../ui/Section2";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <Section />
      <div className="flex justify-center items-center mb-20">
        <Button />
      </div>
      <Section2 />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
