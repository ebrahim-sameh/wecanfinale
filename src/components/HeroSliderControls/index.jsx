import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Autoplay } from "swiper";
import { BsFullscreen } from 'react-icons/bs'

import "swiper/css";
import "swiper/css/free-mode";
import './HeroSliderControls.scss'

const HeroSliderControls = ({ images, setImage, onOpenSlider }) => {
  return (
    <div className='bgk__control__container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={4}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="bgk__control"
      >
        {images.map(img => (
          <SwiperSlide key={img.id}>
            <div className='img__container'>
              <img src={img.src} alt="" onClick={() => setImage && setImage(img.src)}/>
              <button onClick={() => onOpenSlider(true)}><BsFullscreen className='full__secreen__button' /></button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSliderControls