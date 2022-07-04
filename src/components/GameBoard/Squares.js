import React from 'react'
import './GameBoard.css';

const Squares = (props) => {

  const personOne = {
    playerOne: 'X'
  }
  const personTwo = {
    playerTwo: 'O'
  }

  const clickHandler = (e) => {

    props.OnSaveValue(e.target.value, personTwo.playerTwo, personOne.playerOne);
    e.target.setAttribute("disabled", "");

  }

  return (
    <div className='BoardSpot'>
        <input type={'radio'} value={props.val} onClick={ clickHandler } />
    </div>
  )
}

export default Squares