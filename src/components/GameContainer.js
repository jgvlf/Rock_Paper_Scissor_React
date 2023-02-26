import React, { useState } from "react";
import "../css/GameContainer.css"
import { Card } from "./Card";
import { Reset } from "./Reset";
import { Modal } from "./Modal";

export function GameContainer(){
    const selection =[
        "paper",
        "scissors",
        "rock"
    ]
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    var playerChoice = "";
    const [modalDisplay, setModalDisplay] = useState("none");
    const [modalResult, setModalResult] = useState("");
    const [modalIcon, setModalIcon] = useState("");
    const [modalSelection, setModalSelection] = useState("");
    const [modalTextColor, setModalTextColor] = useState("");
    var playerN = 0;
    var computerN = 0;
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
        playerChoice = "rock"
        console.log("Clicou na Pedra")
        getWinner();
    }

    function getPaperValue(){
        computerSelection();
        playerChoice = "paper"
        console.log("Clicou no Papel")
        getWinner();
    }
    
    function getScissorValue(){
        computerSelection();
        playerChoice = "scissors"
        console.log("Clicou na Tesoura")
        console.log(modalDisplay);
        getWinner();
        console.log(modalDisplay);  
    }

    function exitModal(){
        if(modalDisplay == "block"){
            setModalDisplay("none");
        }
    }

    function getWinner(){
        if(playerChoice == computerChoice){
            setModalDisplay("block");
            setModalResult("Empate");
            setModalIcon(`las la-hand-${computerChoice}`);
            if(computerChoice == "rock"){
                setModalSelection("Pedra");
            }
            if(computerChoice == "scissors"){
                setModalSelection("Tesoura");
            }
            else{
                setModalSelection("Papel");
            }
            setModalTextColor("#B0B0B0");

        }
        else if(playerChoice == "rock"){
            if(computerChoice == "scissors"){
                setModalDisplay("block");
                setModalResult("Você venceu!");
                setModalIcon(`las la-hand-scissors`);
                setModalSelection("Tesoura");
                setModalTextColor("#00B000");
                setPlayerScore(playerScore + 1);
            }

            if(computerChoice == "paper"){
                setModalDisplay("block");
                setModalResult("Você perdeu!");
                setModalIcon(`las la-hand-paper`);
                setModalSelection("Papel");
                setModalTextColor("#B00000");
                setComputerScore(computerScore + 1);
            }
        }
        else if(playerChoice == "paper"){
            if(computerChoice == "rock"){
                setModalDisplay("block");
                setModalResult("Você venceu!");
                setModalIcon(`las la-hand-rock`);
                setModalSelection("Pedra");
                setModalTextColor("#00B000");
                setPlayerScore(playerScore + 1);
            }

            if(computerChoice == "scissors"){
                setModalDisplay("block");
                setModalResult("Você perdeu!");
                setModalIcon(`las la-hand-scissors`);
                setModalSelection("Tesoura");
                setModalTextColor("#B00000");
                setComputerScore(computerScore + 1);
            }
        }
        else if(playerChoice == "scissors"){
            if(computerChoice == "paper"){
                setModalDisplay("block");
                setModalResult("Você venceu!");
                setModalIcon(`las la-hand-paper`);
                setModalSelection("Papel");
                setModalTextColor("#00B000");
                setPlayerScore(playerScore + 1);
            }

            if(computerChoice == "rock"){
                setModalDisplay("block");
                setModalResult("Você perdeu!");
                setModalIcon(`las la-hand-rock`);
                setModalSelection("Pedra");
                setModalTextColor("#B00000");
                setComputerScore(computerScore + 1);
            }
        }
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
            <Modal onClick={exitModal} display={modalDisplay} result={modalResult} icon={modalIcon} selection={modalSelection} color={modalTextColor}/>
           </>
    )
}