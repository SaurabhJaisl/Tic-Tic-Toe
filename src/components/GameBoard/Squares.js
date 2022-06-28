import React from 'react'

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
    <div>
        <input type={'radio'} value={props.val} onClick={ clickHandler } />
    </div>
  )
}

export default Squares