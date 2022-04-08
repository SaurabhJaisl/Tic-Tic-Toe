import React ,{ useState, useEffect }from 'react';
import Squares from './Squares';
import './GameBoard.css';

const GameBoard = (props) => {

const [playerSwitch, setSwitch] = useState(false);
const personOne = {
    playerOne: 'X'
}
const personTwo = {
  playerTwo: 'O'
}

let arrPlayerOne = [];
let arrPlayerTwo = [];
const receivedValue = (receivedData) => {

 if (playerSwitch) {
    arrPlayerTwo.push(receivedData, personTwo.playerTwo)
    setSwitch(false)
    console.log(arrPlayerTwo)
 }else {
    arrPlayerOne.push(receivedData, personOne.playerOne)
    setSwitch(true)
    console.log(arrPlayerOne)
 }
}

  return (
    <div className='board'>
        <Squares val={'1'} OnSaveValue={receivedValue}/>
        <Squares val={'2'} OnSaveValue={receivedValue}/>
        <Squares val={'3'} OnSaveValue={receivedValue}/>
        <Squares val={'4'} OnSaveValue={receivedValue}/>
        <Squares val={'5'} OnSaveValue={receivedValue}/>
        <Squares val={'6'} OnSaveValue={receivedValue}/>
        <Squares val={'7'} OnSaveValue={receivedValue}/>
        <Squares val={'8'} OnSaveValue={receivedValue}/>
        <Squares val={'9'} OnSaveValue={receivedValue}/>
    </div>
  )
}

export default GameBoard