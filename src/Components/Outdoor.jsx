// components/VoltageDistributor.jsx
import "aframe";
import { useEffect, useState } from "react";
import outdoorImg from "../assets/outdoor.jpeg";
import navImg from "../assets/navigation.png";
import controlPanelImg from "../assets/controlPanelImg.jpg";
import { useNavigate } from "react-router-dom";

export default function Outdoor() {
  const navigate = useNavigate();
  useEffect(() => {
    const hotspot = document.querySelector("#navImgHotSpot");
    if (hotspot) {
      hotspot.addEventListener("click", () => {
        navigate("/");
      });
    }
  }, []);

  return (
    <div>
      <a-scene background="color: #000000">
        <a-sky
          src={outdoorImg}
          animation="property: material.opacity; from: 0; to: 1; dur: 1000"
          material="opacity: 0; transparent: true"
        ></a-sky>

        {/* <a-image
          id="hotspot1"
          src={navigationImg}
          position="-100.704 2.930 2"
          width="20"
          height="20"
          rotation="0 90 0"
          class="clickable"
        /> */}
        <a-image
          id="controlPanelImgHotspot"
          src={controlPanelImg}
          position="87.490 -71.113 3.833"
          width="3"
          height="3"
          rotation="0 90 0"
        />
        <a-image
          id="navImgHotSpot"
          src={navImg}
          position="87.490 -72.113 3.833"
          width="10"
          height="10"
          rotation="0 90 0"
          class="clickable"
        />

        <a-entity camera look-controls>
          <a-entity raycaster="objects: .clickable" cursor="rayOrigin: mouse" />
        </a-entity>
      </a-scene>
    </div>
  );
}
