import React from "react";

function StepsBox(props) {
    return ( 
        <div className="flex flex-col shadow-allShadow rounded-xl mt-16">
            <ul>
                <li className="stepsIcon flex items-center justify-center mt-5 mx-24"><img src={props.icon} alt="Step icon" /></li>
                <li className="stepsTitle text-2xl font-bold text-gray-600 mt-4 flex items-center justify-center">{props.title}</li>
                <li className="stepsContent text-gray-400 text-xl mt-3 mx-8 mb-10 flex items-center justify-center">{props.content}</li>
            </ul>
        </div>
     );
}

export default StepsBox;