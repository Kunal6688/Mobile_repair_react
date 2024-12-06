import React from "react";
import { Link } from "react-router-dom";
import CategorySelect from "../components/categorySelect";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Iphone from '../assets/iphone2.png'
import Ipad from '../assets/ipad 2.png'
import Android from '../assets/android 2.png'
import Tablet from '../assets/tablet 2.png'
import DeviceRepair from '../assets/Device-repair.png'

function RepairPage() {
    return ( 
        <>
            <Navbar/>
            <div className="flex flex-col lg:flex-row mt-12 mx-4 lg:mx-32 gap-8">
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-semibold">What kind of device are you having trouble with?</h2>
                    <p className="mt-2 text-gray-500">Our experts will assess your device and get it back to you in no time.</p>
                    <div className="flex flex-wrap gap-8 mt-8 justify-center lg:justify-start">
                        <CategorySelect
                            icon={Iphone}
                            title="Iphone"                
                        />
                        <CategorySelect
                            icon={Ipad}
                            title="Ipad"                
                        />
                        <CategorySelect
                            icon={Android}
                            title="Android"                
                        />
                        <CategorySelect
                            icon={Tablet}
                            title="Tablet"                
                        />
                    </div>
                </div>
                <div className="lg:w-1/3 flex flex-col items-center justify-start px-4 lg:px-20">
                    <h4 className="mt-4 text-xl font-semibold">Summary</h4>
                    <img className="mt-5 max-w-full" src={DeviceRepair} alt="Device Repair" />
                    <p className="mt-4 text-center text-lg text-gray-600">Device Repair</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default RepairPage;
