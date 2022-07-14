import React from 'react'
import './Winner.scss';

const Winner = (props) => {
  return (
    <>
    <div className='board'>
      <h2 className={`winnerPlayer ${props.PlayerWins}`}>
         {props.PlayerWins ? `Player ${props.PlayerWins} is winner` : "Khichdi" } 
      </h2>
      </div>
      <div className="party">
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
        <div className="party-popper" />
      </div>

    </>
  )
}

export default Winner