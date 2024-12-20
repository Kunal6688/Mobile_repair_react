import React from "react";
import { Link } from "react-router-dom";
import RepairPage2 from "../pages/repairPage2";

function CategorySelect(props) {
    return (
        <div  className="shadow-allShadow rounded-2xl">
            <ul>
                <Link to="/RepairPage2"><li className="pt-5 px-12"><img src={props.icon} alt="" /></li></Link>
                <li className="flex text-center justify-center">{props.title}</li>
            </ul>
        </div>
    );
}

export default CategorySelect;