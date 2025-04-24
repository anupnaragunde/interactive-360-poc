// components/Map.jsx
import React from "react";
import map from "../assets/map.png";
import navIcon from "../assets/navigation.png";
import { useNavigate } from "react-router-dom";

const Map = ({ showMap, setShowMap }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setShowMap(false); // Hide modal
    navigate(path);
  };

  if (!showMap) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center cursor-pointer">
      <div className="relative w-[80%] h-[80%] bg-white rounded-xl overflow-hidden shadow-xl p-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-20 text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setShowMap(false)}
        >
          Close
        </button>

        {/* Map Image */}
        <div className="relative w-full h-full">
          <img
            src={map}
            alt="Map"
            className="w-full h-full object-contain rounded-xl"
          />

          {/* Example Nav Spot */}
          <div
            className="absolute top-[30%] left-[40%] cursor-pointer flex flex-col items-center"
            onClick={() => handleNavigate("/")}
          >
            <img src={navIcon} alt="Navigate" className="w-14 h-14" />
            <span className="text-sm text-white bg-black px-2 py-1 rounded">
              Control Panel
            </span>
          </div>

          <div
            className="absolute top-[50%] left-[90%] cursor-pointer flex flex-col items-center"
            onClick={() => handleNavigate("/outdoor")}
          >
            <img src={navIcon} alt="Navigate" className="w-14 h-14" />
            <span className="text-sm text-white bg-black px-2 py-1 rounded">
              Outdoor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
