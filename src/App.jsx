import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VoltageDistributor from "./Components/VoltageDistributor";
import Outdoor from "./Components/Outdoor";
import { useState } from "react";
import Map from "./Components/Map";
import mapIcon from "./assets/mapIcon.png";
import NavigateLine from "./Components/navigateLine";
// import other rooms when you create them

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <VoltageDistributor
              setShowModal={setShowModal}
              showModal={showModal}
            />
          }
        />
        <Route
          path="/outdoor"
          element={<Outdoor setShowModal={setShowModal} />}
        />
      </Routes>

      <button
        className="fixed top-[50%] left-6 z-40 p-2 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer"
        onClick={() => setShowMap(true)}
      >
        <img src={mapIcon} alt="Map Icon" className="w-10 h-10" />
      </button>

      {/* Map Modal */}
      <Map showMap={showMap} setShowMap={setShowMap} />
      <NavigateLine></NavigateLine>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VoltageDistributor from "./Components/VoltageDistributor";
// import Outdoor from "./Components/Outdoor";
// import { useState } from "react";
// import Map from "./Components/Map";
// import mapIcon from "./assets/mapIcon.png";
// import NavigateLine from "./Components/navigateLine";
// // import other rooms when you create them

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [showMap, setShowMap] = useState(false);

//   return (
//     <div>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <VoltageDistributor
//               setShowModal={setShowModal}
//               showModal={showModal}
//             />
//           }
//         />
//         <Route
//           path="/outdoor"
//           element={<Outdoor setShowModal={setShowModal} />}
//         />
//       </Routes>

//       <button
//         className="fixed bottom-6 left-6 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer"
//         onClick={() => setShowMap(true)}
//       >
//         <img src={mapIcon} alt="Map Icon" className="w-10 h-10" />
//       </button>

//       {/* Map Modal */}
//       <Map showMap={showMap} setShowMap={setShowMap} />
//       <NavigateLine></NavigateLine>
//     </div>
//   );
// }

// export default App;
