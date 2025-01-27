import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Battery from "../assets/battery.png";
import Broken from "../assets/broken-screen.png";

function RepairPage2() {
  const [selectedDivs, setSelectedDivs] = useState([]);

  const handleClick = (divName) => {
    setSelectedDivs((prevSelectedDivs) =>
      prevSelectedDivs.includes(divName)
        ? prevSelectedDivs.filter((name) => name !== divName)
        : [...prevSelectedDivs, divName]
    );
  };

  return (
    <>
      <Navbar />
      <div className="pl-5 pt-5 mt-10 mx-4 w-auto shadow-allShadow">
        <h1 className="text-4xl mb-2">What's wrong with it?</h1>
        <p className="text-xl mb-5">Don’t worry, we will fix it!</p>
        <div className="">
          <div className="flex flex-wrap p-2 gap-5">
            <div
              className={`image cursor-pointer flex flex-col text-center gap-2 shadow-allShadow px-6 rounded-xl h-40 w-40 sm:w-auto border-2 ${
                selectedDivs.includes("Battery") ? "border-teal-500" : ""
              }`}
              onClick={() => handleClick("Battery")}
            >
              <img className="mt-3   w-24 h-24 max-w-xs" src={Battery} alt="battery" />
              <p className="mb-3">Battery</p>
            </div>
            <div
              className={` image cursor-pointer flex flex-col text-center gap-2 shadow-allShadow px-6 rounded-xl h-40 w-40 sm:w-auto border-2 ${
                selectedDivs.includes("Broken Screen") ? "border-teal-500" : ""
              }`}
              onClick={() => handleClick("Broken Screen")}
            >
              <img className="mt-3 ml-2 w-24 h-24 max-w-xs" src={Broken} alt="broken-screen" />
              <p className="mb-3">Broken Screen</p>
            </div>

            <div className="flex flex-col gap-6 w-full sm:w-auto">
              <div
                className={`cursor-pointer shadow-allShadow border-2 ${
                  selectedDivs.includes("Charging Port") ? "border-teal-500" : ""
                } py-2 px-4 rounded-xl`}
                onClick={() => handleClick("Charging Port")}
              >
                Charging Port
              </div>
              <div
                className={`cursor-pointer shadow-allShadow border-2 ${
                  selectedDivs.includes("Camera Lens") ? "border-teal-500" : ""
                } py-2 px-4 rounded-xl`}
                onClick={() => handleClick("Camera Lens")}
              >
                Camera Lens
              </div>
              <div
                className={`cursor-pointer shadow-allShadow border-2 ${
                  selectedDivs.includes("Free Diagnostic") ? "border-teal-500" : ""
                } py-2 px-4 rounded-xl`}
                onClick={() => handleClick("Free Diagnostic")}
              >
                Free Diagnostic
              </div>
            </div>
          </div>
          <div>
            <input
              className="ml-2 my-4 shadow-allShadow text-left p-2 h-32 border-none rounded-xl"
              type="text"
              name="issues"
              id="issues"
              placeholder="describe other issues"
            />
          </div>
          <div className="flex flex-wrap gap-7">
            <Link to="/RepairPage">
              <button className="px-5 py-2 rounded-3xl text-lg text-white bg-teal-500 shadow-allShadow mt-2 mb-7 w-full sm:w-auto">
                Go back
              </button>
            </Link>
            <Link to="/RepairPage3"><button className="px-5 py-2 rounded-3xl text-lg text-white bg-teal-500 shadow-allShadow mt-2 mb-7 w-full sm:w-auto">
              Next
            </button></Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RepairPage2;
