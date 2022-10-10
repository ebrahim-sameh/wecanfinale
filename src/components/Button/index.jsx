import React from 'react'

import './Button.scss'

const Button = ({ children, type }) => {  
  return (
    <button type={type || 'button'} className='main__button'>
      <span className='button__icon'></span>
      {children}
    </button>
  )
}

export default Button