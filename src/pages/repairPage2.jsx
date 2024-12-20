import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Battery from "../assets/battery.png";
import Broken from "../assets/broken-screen.png";

function RepairPage2() {
    return ( 
        <>
            <Navbar/>
            <div className="pl-5 pt-5 mt-10 mx-4 shadow-allShadow">
                <h1 className=" text-4xl mb-2">What's wrong with it?</h1>
                <p className="text-xl mb-5 ">Don’t worry, we will fix it!</p>
                <div className="">
                    <div className="flex p-2 gap-5">
                        <div className="flex flex-col text-center gap-2 shadow-allShadow">
                            <img src={Battery} alt="battery" />
                            <p>Battery</p>
                        </div>
                        <div className="flex flex-col text-center gap-2 shadow-allShadow">
                            <img src={Broken} alt="broken-screen" />
                            <p>Broken Screen</p>
                        </div>
                        
                        <div>
                            <div className="">Charging Port</div>
                            <div>Charging Port</div>
                            <div>Charging Port</div>
                        </div>
                    </div>
                    <div>
                        <input type="text" name="issues" id="issues" placeholder="describe other issues" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}

export default RepairPage2;