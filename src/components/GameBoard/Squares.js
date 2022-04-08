import React, { useState } from 'react'

const Squares = (props) => {

    const clickHandler = (e) => {
      props.OnSaveValue(e.target.value);
      e.target.setAttribute("disabled", "");

    }

  return (
    <div>
        <input type={'radio'} value={props.val} onClick={ clickHandler } />
    </div>
  )
}

export default Squares