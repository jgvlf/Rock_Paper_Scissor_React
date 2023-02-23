import React, { useState } from "react";
import "../css/GameContainer.css"
import { Card } from "./Card";
import RockHand from "../img/hand.svg"
import PaperHand from "../img/hand-2.svg"
import ScissorHand from "../img/hand-3.svg"
import ResetIcon from "../img/restart.svg"
import { Reset } from "./Reset";
import { getValue } from "@testing-library/user-event/dist/utils";

export function GameContainer(){
    const selection =[
        "PAPEL",
        "TESOURA",
        "PEDRA"
    ]
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    var playerChoice = ""
    const [computerChoice, setComputerChoice] = useState(selection[Math.floor(Math.random()*selection.length)]);
    
    function computerSelection(){
        setComputerChoice(selection[Math.floor(Math.random()*selection.length)]);
    }

    function getResetValue(){
        console.log("Clicou no Reset")
        setPlayerScore(0);
        setComputerScore(0);
    }

    function getRockValue(){
        computerSelection();
        playerChoice = "PEDRA"
        console.log("Clicou na Pedra")
        getWinner();
    }

    function getPaperValue(){
        computerSelection();
        playerChoice = "PAPEL"
        console.log("Clicou no Papel")
        getWinner();
    }
    
    function getScissorValue(){
        computerSelection();
        playerChoice = "TESOURA"
        console.log("Clicou na Tesoura")
        getWinner();
    }

    function getWinner(){
        console.log(`Computador escolheu: ${computerChoice}`)
        console.log(`Jogador escolheu: ${playerChoice}`)
    }

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
                    <Reset onClick={getResetValue} className="img-icon icon icon-reset" id="reset"/>
                </div>
                <div className="container-title">
                    <h1 className="text-gc">Faça sua seleção</h1>
                </div>
                <div className="cards">
                    <Card onClick={getRockValue} className="img-icon image-selection" id="rock" text="Pedra" src={RockHand}/>
                    <Card onClick={getPaperValue} className="img-icon image-selection" id="paper" text="Papel" src={PaperHand}/>
                    <Card onClick={getScissorValue} className="img-icon image-selection" id="scissor" text="Tesoura" src={ScissorHand}/>
                </div>
            </div>
        </>
    )
}