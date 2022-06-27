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

let arr = [
  ["","",""],
  ["","",""],
  ["","",""]
];

const receivedValue = (receivedData) => {

  let [position, value] = (receivedData.split(','))


  arr[position][value] = value

  console.log(arr)

//  if (playerSwitch) {
//     arrPlayerTwo.push(...receivedData, ...personTwo.playerTwo)
//     setSwitch(false)
//     console.log(arrPlayerTwo)
//  }else {
//     arrPlayerOne.push(...receivedData, ...personOne.playerOne)
//     setSwitch(true)
//     console.log(arrPlayerOne)
//  }
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