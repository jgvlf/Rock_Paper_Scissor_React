import React, { useState } from "react";
import "../css/GameContainer.css"
import RockHand from "../img/hand.svg"
import PaperHand from "../img/hand-2.svg"
import ScissorHand from "../img/hand-3.svg"

export function GameContainer(){
    const selection = {
        1:"PAPEL",
        2:"TESOURA",
        3:"PEDRA"
    }
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    return(
        <>
            <div className="container">
                <div className="score">
                    <div className="p-score">
                        <h3 className="ps-text">Jogador: {playerScore}</h3>
                    </div>
                    <div className="c-score">
                        <h3 className="cs-text">Computador: {computerScore}</h3>
                    </div>
                </div>
                <div className="container-title">
                    <h1 className="text-gc">Faça sua seleção</h1>
                </div>
                <div className="cards">
                    <div className="selection-card">
                        <img src={RockHand}/>
                        <h3 className="card-text">Pedra</h3>
                    </div>
                    <div className="selection-card">
                        <img src={PaperHand}/>
                        <h3 className="card-text">Papel</h3>
                    </div>
                    <div className="selection-card">
                        <img src={ScissorHand}/>
                        <h3 className="card-text">Tesoura</h3>
                    </div>
                </div>
            </div>
        </>
    )
}