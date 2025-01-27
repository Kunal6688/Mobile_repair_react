import React from "react";

function Input(props) {
    return ( 
        <>
            <input className="shadow-allShadow  ml-5 py-2 pl-2 pr-16 rounded-xl" type="text" placeholder={props.placeholder} />
        </>
     );
}

export default Input;