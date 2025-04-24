import React from "react";

export default function infoModal({ data, Header }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
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
                systems, voltage distributors are part of power distribution
                units (PDUs). They feed multiple devices with appropriate
                voltage while protecting them from overloads. These often
                include circuit breakers, fuses, or surge protectors. On printed
                circuit boards (PCBs), they help distribute various voltage
                levels (like 3.3V, 5V, 12V) to different components. This allows
                integrated circuits, sensors, and actuators to function
                correctly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
