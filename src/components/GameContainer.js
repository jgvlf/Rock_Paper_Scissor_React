import React, { useState } from "react";
import "../css/GameContainer.css"
import { Card } from "./Card";
import RockHand from "../img/hand.svg"
import PaperHand from "../img/hand-2.svg"
import ScissorHand from "../img/hand-3.svg"
import ResetIcon from "../img/restart.svg"
import { Reset } from "./Reset";

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
                <div className="reset-div">
                    <Reset className="img-icon icon icon-reset" id="reset"/>
                </div>
                <div className="container-title">
                    <h1 className="text-gc">Faça sua seleção</h1>
                </div>
                <div className="cards">
                    <Card className="img-icon image-selection" id="rock" text="Pedra" src={RockHand}/>
                    <Card className="img-icon image-selection" id="paper" text="Papel" src={PaperHand}/>
                    <Card className="img-icon image-selection" id="scissor" text="Tesoura" src={ScissorHand}/>
                </div>
            </div>
        </>
    )
}