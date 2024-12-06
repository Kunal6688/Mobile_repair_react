import React from "react";

function CategoryBox(props) {
    return (
        <div className="flex flex-col shadow-allShadow rounded-xl p-6 w-full md:w-1/3 bg-white">
            <ul>
                {/* Icon */}
                <li className="stepsIcon flex justify-center md:justify-start mt-4">
                    <img
                        src={props.icon}
                        alt="Step icon"
                        className="w-12 h-12 md:w-16 md:h-16"
                    />
                </li>

                {/* Title */}
                <li className="stepsTitle text-lg md:text-2xl font-bold mt-3 text-center md:text-left text-gray-600">
                    {props.title}
                </li>

                {/* Content */}
                <li className="stepsContent text-gray-400 text-sm md:text-xl mt-2 text-center md:text-left">
                    {props.content}
                </li>
            </ul>
        </div>
    );
}

export default CategoryBox;
