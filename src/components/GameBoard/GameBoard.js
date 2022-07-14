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
    console.log(receivedData)
    document.getElementById(inputID).previousSibling.innerText = playerTurn
    document.getElementById(inputID).previousSibling.classList.add(playerTurn)
    winnerCal(mainBoard, playerO, playerX)
  }
  const winnerCal = (playersData, playerO, playerX) => {
    turnCount++
    console.log(playersData);
    if (turnCount > 3) {
      for (let i = 0; i < playersData.length; i++) {
        for (let j = 0; j < playersData.length; j++) {
          if (((playersData[i][j] === playerX) && (playersData[i][j + 1] === playerX) && (playersData[i][j + 2] === playerX)) ||
            ((i === 0) && ((playersData[i][j] === playerX) && (playersData[i + 1][j] === playerX) && (playersData[i + 2][j] === playerX)))) {
            console.log(`${playerX} is won`)
            setplayerWins(true)
            setplayerWinner(playerX)
            break;
          } else if ((((playersData[i][j] === playerO) && (playersData[i][j + 1] === playerO) && (playersData[i][j + 2] === playerO)) || ((i === 0) && ((playersData[i][j] === playerO) && (playersData[i + 1][j] === playerO) && (playersData[i + 2][j] === playerO))))) {
            console.log(`${playerO} is won`)
            setplayerWins(true)
            setplayerWinner(playerO)
            break;
          }
        }
        if ((i === 0) && (((playersData[i][i] === playerX) && (playersData[i + 1][i + 1] === playerX) && (playersData[i + 2][i + 2] === playerX)) ||
          (((playersData[i][i + 2]) === playerX) && (playersData[i + 1][i + 1] === playerX) && (playersData[i + 2][i] === playerX)))) {
            console.log(`${playerX} is won`)
            setplayerWins(true)
            setplayerWinner(playerX)
            break;
        } else if ((i === 0) && (((playersData[i][i] === playerO) && (playersData[i + 1][i + 1] === playerO) && (playersData[i + 2][i + 2] === playerO)) ||
          (((playersData[i][i + 2]) === playerO) && (playersData[i + 1][i + 1] === playerO) && (playersData[i + 2][i] === playerO)))) {
            console.log(`${playerO} is won`)
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
      <Squares val={'0,0'} SquarId={'square-0-0'} OnSaveValue={receivedValue} />
      <Squares val={'0,1'} SquarId={'square-0-1'} OnSaveValue={receivedValue} />
      <Squares val={'0,2'} SquarId={'square-0-2'} OnSaveValue={receivedValue} />
      <Squares val={'1,0'} SquarId={'square-1-0'} OnSaveValue={receivedValue} />
      <Squares val={'1,1'} SquarId={'square-1-1'} OnSaveValue={receivedValue} />
      <Squares val={'1,2'} SquarId={'square-1-2'} OnSaveValue={receivedValue} />
      <Squares val={'2,0'} SquarId={'square-2-0'} OnSaveValue={receivedValue} />
      <Squares val={'2,1'} SquarId={'square-2-1'} OnSaveValue={receivedValue} />
      <Squares val={'2,2'} SquarId={'square-2-2'} OnSaveValue={receivedValue} /></div>}
    </>
  )
}

export default GameBoard