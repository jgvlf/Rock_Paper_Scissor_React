import React from "react";
import "../css/modal.css"


export function Modal({result, icon, selection, color}){
    return(
        <div className="modal">
            <div id="result" className="modal-content">
                <h1 style={{color: color}}>{result}</h1>
                <i className={icon}></i>
                <p>Computador Escolheu {selection}</p>
            </div>
        </div>
    )
}