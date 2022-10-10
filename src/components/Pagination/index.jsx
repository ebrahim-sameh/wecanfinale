import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

import './Pagination.scss'

const Pagination = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='main__pagination'>
      {/* <button 
        onClick={() => setOpen(prev => !prev)}
      >
        {!open ? <BsPlus /> : <BiMinus />}
      </button> */}
      <ul className={open ? 'show' : ''}>
        <li>
          <button 
            onClick={() => setOpen(prev => !prev)}
            >
            {!open ? <BsPlus /> : <BiMinus />}
          </button>
        </li>
        <li>
          <a href="#">
            <span className='p_tooltip'>Home</span>
          </a>
        </li>
        <li>
          <a href="#gallary">
            <span className='p_tooltip'>Gallary</span>
          </a>
        </li>
        <li>
          <a href="#about-us">
            <span className='p_tooltip'>About Us</span>
          </a>
        </li>
        <li>
          <a href="#our-projects">
            <span className='p_tooltip'>Our Projects</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination