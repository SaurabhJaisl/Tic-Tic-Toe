import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='footer'>
          <p>{props.title}</p>
    </div>
  )
}

export default Footer