import React from "react";
import StepsBox from "./homeStepsBox";
import { Link } from "react-router-dom";
import Repair from "../assets/repair.png";

function HomeBox() {
    return (
        <div className="flex flex-col md:flex-row mt-8 mx-4 md:mx-40 bg-white shadow-allShadow rounded-2xl overflow-hidden">
            {/* Left Section */}
            <div className="left p-6 flex flex-col justify-between items-center w-full md:w-1/2">
                <div className="upper w-full text-center md:text-left">
                    <h1 className="text-gr mt-4 md:mt-16 text-3xl md:text-5xl font-semibold text-text">
                        Fast, affordable and reliable repairs
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg md:text-2xl">
                        for your mobile devices
                    </p>
                </div>
                <div className="lower mt-8 md:mt-32">
                    <Link to="/RepairPage">
                        <button className="bg-button text-white py-3 px-8 md:px-20 rounded-lg">
                            Book a Repair
                        </button>
                    </Link>
                </div>
            </div>

            {/* Right Section */}
            <div className="right bg-orange-200 w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center">
                <img
                    src={Repair}
                    alt="Repair Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default HomeBox;
