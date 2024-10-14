import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <div className="flex justify-center items-center gap-4 pb-10">
        <button
          className="px-4 py-2 text-white bg-zinc-600"
          onClick={() => navigate("/contact/contactform")} // Use the correct path
        >
          Form
        </button>
        <button
          className="px-4 py-2 text-white bg-zinc-600"
          onClick={() => navigate("/contact/contactinfo")} // Use the correct path
        >
          Info
        </button>
      </div>
    </div>
  );
};

export default Contact;
