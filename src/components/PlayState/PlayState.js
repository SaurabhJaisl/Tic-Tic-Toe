import React from 'react'
import { Link } from 'react-router-dom'
import './PlayState.scss'

const PlayState = () => {
  return (
    <div className='action-btn'>   
        <Link to='/GameBoard' className='play-btn'>Play</Link>
    </div>
  )
}

export default PlayState