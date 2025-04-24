// components/VoltageDistributor.jsx
import "aframe";
import { useEffect, useState } from "react";
import egImage from "../assets/eg.jpeg";
import iimg from "../assets/i.png";
import voltagedistributorbackground from "../assets/voltagedistributorbackground.jpg";
import SpinnerComp from "./Spinner";
import arrow from "../assets/arrow.png";
import navImg from "../assets/navigation.png";
import outdoorIcon from "../assets/outdoorImg.jpg";
import { useNavigate } from "react-router-dom";

export default function VoltageDistributor() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const hotspot = document.querySelector("#hotspot1");
    if (hotspot) {
      hotspot.addEventListener("click", () => {
        setShowModal(true);
      });
    }
  }, []);
  useEffect(() => {
    const hotspot = document.querySelector("#navImgHotSpot");
    if (hotspot) {
      hotspot.addEventListener("click", () => {
        navigate("/outdoor");
      });
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  console.log(egImage);
  if (!egImage) {
    return (
      <div className="h-[calc(100vh-62px)] w-10/12 mx-auto flex justify-center items-center relative">
        <SpinnerComp />
      </div>
    );
  }

  return (
    <div>
      <a-scene background="color: #000000">
        <a-sky
          src={egImage}
          animation="property: material.opacity; from: 0; to: 1; dur: 1000"
          material="opacity: 0; transparent: true"
        ></a-sky>
        <a-image
          id="hotspot1"
          src={iimg}
          position="-100.704 2.930 2"
          width="20"
          height="20"
          rotation="0 90 0"
          class="clickable"
        />
        <a-text
          value="Control Panel"
          position="0-100.704 2.930 2"
          align="center"
          color="white"
          width="20"
          look-at="[camera]"
        />

        <a-image
          id="outdoorHotspot"
          src={outdoorIcon}
          position="10.635 -1.136 100.044"
          width="10"
          height="10"
          rotation="0 0 0"
          class="clickable"
        />
        <a-image
          id="navImgHotSpot"
          src={navImg}
          position="10.635 -5.136 90.044"
          width="25"
          height="25"
          rotation="0 0 0"
          class="clickable"
        />
        <a-image
          id="arrowHotspot"
          src={arrow}
          position="8.129 -29.863 61.430"
          width="25"
          height="25"
          rotation="0 0 90 "
        />

        <a-entity camera look-controls>
          <a-entity raycaster="objects: .clickable" cursor="rayOrigin: mouse" />
        </a-entity>
      </a-scene>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative flex gap-20 w-[60%] h-[60%] overflow-hidden rounded-2xl bg-[#18406a] shadow-xl p-4">
            <div
              onClick={closeModal}
              className="absolute right-4 top-4  text-lg font-bold cursor-pointer border py-1 px-4 rounded-md bg-red-500 text-white"
            >
              Close
            </div>
            <div className="w-[35%] flex items-center justify-center">
              <img
                src={voltagedistributorbackground}
                alt="Modal visual"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 mt-6">
              <h2 className="text-3xl font-bold text-center text-red-600 uppercase mb-4 p-4 border-b-2">
                Voltage Distributor
              </h2>
              <p className="text-white">
                A voltage distributor is a device or circuit used to distribute
                electrical voltage from a single source to multiple
                destinations. It ensures that each connected component receives
                the correct voltage needed for its operation. Voltage
                distributors are common in both analog and digital electrical
                systems. They help maintain stable and regulated power across
                multiple outputs. In automobiles, the ignition voltage
                distributor delivers high-voltage pulses to spark plugs in a set
                sequence. This ensures proper engine firing and smooth
                performance. Modern vehicles have mostly replaced them with
                electronic ignition systems. In industrial and commercial
                systems, correctly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
