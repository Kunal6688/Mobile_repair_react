import React from "react";

function CategorySelect(props) {
    return (
        <div  className="shadow-allShadow rounded-2xl">
            <ul>
                <li className="pt-5 px-12"><img src={props.icon} alt="" /></li>
                <li className="flex text-center justify-center">{props.title}</li>
            </ul>
        </div>
    );
}

export default CategorySelect;