import React from 'react'
import './GameBoard.scss';

const Squares = (props) => {

  const personOne = {
    playerOne: 'x'
  }
  const personTwo = {
    playerTwo: 'o'
  }
  
  const clickHandler = (e) => {

    props.OnSaveValue(e.target.value, personTwo.playerTwo, personOne.playerOne, e.target.id);
    e.target.setAttribute("disabled", "");

  }

  return (
    <div className='BoardSpot'>
        <label htmlFor={props.SquarId} ></label>
        <input type={'radio'} value={props.val} onClick={ clickHandler } id={props.SquarId} />
    </div>
  )
}

export default Squares