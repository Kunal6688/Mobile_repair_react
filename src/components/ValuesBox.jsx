import React from "react";

function ValuesBox(props) {
    return ( 
        <div className={`shadow-allShadow p-4 sm:p-6 w-full sm:w-[351px] md:w-[400px] rounded-xl ${props.bgColor}`}>
            <div className="">
                <img src={props.icon} alt="" className="w-12 h-12 mx-auto" />
                <h1 className="text-xl sm:text-2xl mt-4 font-semibold">{props.title}</h1>
                <ul className="mt-3 flex flex-col gap-2">
                    <li className=" text-xs sm:text-sm">{props.point1}</li>
                    <li className=" text-xs sm:text-sm">{props.point2}</li>
                    <li className=" text-xs sm:text-sm">{props.point3}</li>
                    <li className="text-xs sm:text-sm">{props.point4}</li>
                </ul>
            </div>
        </div>
     );
}

export default ValuesBox;