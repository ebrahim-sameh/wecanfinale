import React, { useEffect } from 'react'
import Button from '../Button'
import Aos from "aos";

import "aos/dist/aos.css";
import './AboutUs.scss'

const AboutUs = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='about__section' id='about-us'>
      <div className="about__content">
        <div className="container">
          <h2 className='section__title' data-aos="zoom-in">About Us</h2>
          <div className="about__data d-flex">
            <div className="about__box" data-aos="fade-right">
              <h4 className='about__title'>who we are?</h4>
              <p>We Can Company was established in 2010, specialising in wood-based products. We are located in Egypt and our main objective is to supply high-quality products at affordable prices across our website and platforms.</p>
            </div>
            <div className="about__box" data-aos="fade-left">
              <h4 className='about__title'>our vision!</h4>
              <p>We have extensive experience in this field, We have a team of highly qualified professionals who are capable of meeting your expectations and needs. Our experience in the industry has enabled us to clearly understand what our customers need to create the home of their dreams.</p>
            </div>
            <div className="about__box" data-aos="fade-right">
              <h4 className='about__title'>our mission!</h4>
              <p>We have extensive experience in this field, We have a team of highly qualified professionals who are capable of meeting your expectations and needs. Our experience in the industry has enabled us to clearly understand what our customers need to create the home of their dreams.</p>
            </div>
            <div className="about__box" data-aos="fade-left">
              <h4 className='about__title'>our history!</h4>
              <p>We have extensive experience in this field, We have a team of highly qualified professionals who are capable of meeting your expectations and needs. Our experience in the industry has enabled us to clearly understand what our customers need to create the home of their dreams.</p>
            </div>
          </div>
          <div data-aos="fade-up">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs