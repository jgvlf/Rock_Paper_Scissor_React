import React, { useState } from "react";
import "../css/GameContainer.css"
import { Card } from "./Card";
import { Reset } from "./Reset";
import { Modal } from "./Modal";

export function GameContainer(){
    const selection =[
        "PAPEL",
        "TESOURA",
        "PEDRA"
    ]
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    var playerChoice = ""
    var modalTextColor = "#00B000" 
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
                    <Reset onClick={getResetValue}/>
                </div>
                <div className="container-title">
                    <h1 className="text-gc">Faça sua seleção</h1>
                </div>
                <div className="cards">
                    <Card onClick={getRockValue} className="las la-hand-rock" id="rock" text="Pedra"/>
                    <Card onClick={getPaperValue} className="las la-hand-paper" id="paper" text="Papel"/>
                    <Card onClick={getScissorValue} className="las la-hand-scissors" id="scissor" text="Tesoura"/>
                </div>
            </div>
            <Modal result="Você venceu" icon="las la-hand-rock" selection="Pedra" color={modalTextColor}/>
        </>
    )
}