import React from "react";
import "../css/modal.css"


export function Modal({result, icon, selection, color, display, onClick}){
    return(
        <div style={{display: display}} className="modal">
            <div id="result" className="modal-content">
                <h1 style={{color: color}}>{result}</h1>
                <i onClick={onClick} className={icon}></i>
                <p>Computador Escolheu {selection}</p>
            </div>
        </div>
    )
}