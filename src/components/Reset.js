import React from "react";
import "../css/reset.css";

export function Reset({className, id, onClick}){
    return(
        <span onClick={onClick} className={className} id={id}/>
    )
}