import React from "react";
import { useNavigate } from "react-router-dom";
import navImg from "../assets/navigation.png";

const NavigateLine = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Use React Router navigation
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center  px-6 py-3  ">
        {/* Control Panel Icon */}
        <div
          onClick={() => handleNavigate("/")}
          className="cursor-pointer flex flex-col items-center text-white hover:scale-105 transition-transform duration-200"
        >
          <img src={navImg} alt="Home" className="w-12 h-12" />
          <span className="text-xs mt-1">Control Panel</span>
        </div>

        {/* Connecting Line with Arrow */}

        <div className="flex items-center gap-2">
          {/* Left Line */}
          <div className="h-0.5 w-8 bg-black" />

          {/* Arrow Head */}

          {/* Right Line */}
          <div className="h-0.5 w-8 bg-black" />
          <div className="w-3 h-3 border-t-2 border-r-2 border-black rotate-45" />
        </div>

        {/* Outdoor Icon */}
        <div
          onClick={() => handleNavigate("/outdoor")}
          className="cursor-pointer flex flex-col items-center text-white hover:scale-105 transition-transform duration-200"
        >
          <img src={navImg} alt="Outdoor" className="w-12 h-12" />
          <span className="text-xs mt-1">Outdoor</span>
        </div>
      </div>
    </div>
  );
};

export default NavigateLine;
