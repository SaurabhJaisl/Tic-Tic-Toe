import React from 'react'
import { Link } from 'react-router-dom';
import Khichdi from './Khichdi';
import './Winner.scss';
import { RefreshCw } from 'react-feather';

const Winner = (props) => {
  return (
    <>
    <div className='board'>
      <h2 className={`winnerPlayer ${props.PlayerWins}`}>
         {props.PlayerWins ? `Player ${props.PlayerWins} is winner` : <Khichdi /> } 
      </h2>
    </div>
    <Link to={'/'} className='reset-game'>
        <RefreshCw />
        Play Again
      </Link>
  {props.PlayerWins &&  <div className="party">
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
      </div>}

    </>
  )
}

export default Winner