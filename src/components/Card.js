import React from "react";
import "../css/card.css"

export function Card({text, className, id}){
    return(
            <div className="selection-card">
                <span className={className} id={id}/>
                <h3 className="card-text">{text}</h3>
            </div>
    )
}