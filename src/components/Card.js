import React from "react";
import "../css/card.css"

export function Card({id, text, className, onClick}){
    return(
            <div className="selection-card">
                <span id={id} onClick={onClick} className={className}/>
                <h3 className="card-text">{text}</h3>
            </div>
    )
}