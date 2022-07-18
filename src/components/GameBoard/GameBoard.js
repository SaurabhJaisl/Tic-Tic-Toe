import React, { useState } from 'react';
import Squares from './Squares';
import './GameBoard.scss';
import Winner from '../Winner/Winner';

const GameBoard = () => {

  const [playerWins, setplayerWins] = useState(false);
  const [playerWinner, setplayerWinner] = useState('');
  let mainBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  let playerTurn, turnFlag = false, turnCount = 0;
  const receivedValue = (receivedData, playerO, playerX, inputID) => {

    if (turnFlag) {
      playerTurn = playerO;
      turnFlag = false;
    } else {
      playerTurn = playerX;
      turnFlag = true
    }
    let [position, value] = (receivedData.split(','))

    mainBoard[position][value] = playerTurn;

    document.getElementById(inputID).previousSibling.innerText = playerTurn
    document.getElementById(inputID).previousSibling.classList.add(playerTurn)
    winnerCal(mainBoard, playerO, playerX)
  }
  const winnerCal = (playersData, playerO, playerX) => {
    turnCount++

    if (turnCount > 3) {
      for (let i = 0; i < playersData.length; i++) {
        for (let j = 0; j < playersData.length; j++) {
          if (((playersData[i][j] === playerX) && (playersData[i][j + 1] === playerX) && (playersData[i][j + 2] === playerX)) ||
            ((i === 0) && ((playersData[i][j] === playerX) && (playersData[i + 1][j] === playerX) && (playersData[i + 2][j] === playerX)))) {
            setplayerWins(true)
            setplayerWinner(playerX)
            break;
          } else if ((((playersData[i][j] === playerO) && (playersData[i][j + 1] === playerO) && (playersData[i][j + 2] === playerO)) || ((i === 0) && ((playersData[i][j] === playerO) && (playersData[i + 1][j] === playerO) && (playersData[i + 2][j] === playerO))))) {

            setplayerWins(true)
            setplayerWinner(playerO)
            break;
          }
        }
        if ((i === 0) && (((playersData[i][i] === playerX) && (playersData[i + 1][i + 1] === playerX) && (playersData[i + 2][i + 2] === playerX)) ||
          (((playersData[i][i + 2]) === playerX) && (playersData[i + 1][i + 1] === playerX) && (playersData[i + 2][i] === playerX)))) {
            setplayerWins(true)
            setplayerWinner(playerX)
            break;
        } else if ((i === 0) && (((playersData[i][i] === playerO) && (playersData[i + 1][i + 1] === playerO) && (playersData[i + 2][i + 2] === playerO)) ||
          (((playersData[i][i + 2]) === playerO) && (playersData[i + 1][i + 1] === playerO) && (playersData[i + 2][i] === playerO)))) {
            setplayerWins(true)
            setplayerWinner(playerO)
            break;
        }
        if (playerWins) break;
        if(turnCount === 9) setplayerWins(true);
      }
    }
  }

  return (
    
    <>
         {playerWins ? <Winner PlayerWins={playerWinner} /> : <div className='board'>   

         {mainBoard.map((val ,i) => {

          let sqareCompo =  mainBoard.map((value, j) => {

              return <Squares 
                      key={`${i},${j}`} 
                      val={`${i},${j}`} 
                      SquarId={`square-${i}-${j}`} 
                      OnSaveValue={receivedValue} />

            })

            return sqareCompo
        })}   
      </div>} 
    </>
  )
}

export default GameBoard