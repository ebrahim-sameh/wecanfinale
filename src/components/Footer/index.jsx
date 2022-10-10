import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__content d-flex align-items-center justify-content-between">
          <div className="footer__box d-flex flex-column">
            <h4 className='d-flex align-items-center'><BsTelephoneFill />Contact Phones</h4>
            <a href='#'>1 (800) 765-43-21, 765-43-21</a>
            <a href='#'>1 (800) 765-43-21, 765-43-21</a>
          </div>
          <div className="footer__box d-flex flex-column">
            <h4 className='d-flex align-items-center'><HiLocationMarker />Our Location</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nesciunt?</p>
          </div>
        </div>
        <div className="footer__links d-flex align-items-center justify-content-between">
          <a href="#home" target='_blank'><FaFacebookF /></a>
          <a href="#home" target='_blank'><FaTwitter /></a>
          <a href="#home" target='_blank'><FaLinkedinIn /></a>
          <a href="#home" target='_blank'><GrInstagram /></a>
          <a href="#home" target='_blank'><FaDribbble /></a>
        </div>
        <div className="copy__rigth d-flex flex-column align-items-center justify-content-center">
          <p>© 2022 We Can Wooden Products. All Rights Reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer