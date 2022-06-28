import React from 'react';
import Squares from './Squares';
import './GameBoard.css';
// import Winner from '../Winner/Winner';

const GameBoard = () => {

let mainBoard = [
  ["","",""],
  ["","",""],
  ["","",""]
];
let playerTurn,turnFlag = false;

const receivedValue = (receivedData, playerO, playerX) => {

if (turnFlag) {
  playerTurn = playerO;
  turnFlag = false;
}else {
  playerTurn = playerX;
  turnFlag = true
}
let [position, value] = (receivedData.split(','))

mainBoard[position][value] = playerTurn;
winnerCal(mainBoard, playerO, playerX)
}
const winnerCal = (playersData, playerO, playerX) => {
  console.log(playersData);
}

  return (
    <div className='board'>
        <Squares val={'0,0'} OnSaveValue={receivedValue}/>
        <Squares val={'0,1'} OnSaveValue={receivedValue}/>
        <Squares val={'0,2'} OnSaveValue={receivedValue}/>
        <Squares val={'1,0'} OnSaveValue={receivedValue}/>
        <Squares val={'1,1'} OnSaveValue={receivedValue}/>
        <Squares val={'1,2'} OnSaveValue={receivedValue}/>
        <Squares val={'2,0'} OnSaveValue={receivedValue}/>
        <Squares val={'2,1'} OnSaveValue={receivedValue}/>
        <Squares val={'2,2'} OnSaveValue={receivedValue}/>
    </div>
  )
}

export default GameBoard