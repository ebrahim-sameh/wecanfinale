import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AiOutlineCompress } from 'react-icons/ai'
import Aos from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import './OurProjects.scss'
import FullScreenSlider from '../FullScreenSlider';

const OurProjects = () => {

  const [openSlider, setOpenSlider] = useState(false);

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg'
    },
    {
      id: 2,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg'
    },
    {
      id: 3,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-2-original.jpg'
    },
    {
      id: 4,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-4-original.jpg'
    },
    {
      id: 5,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg'
    },
    {
      id: 6,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg'
    },
    {
      id: 7,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-2-original.jpg'
    },
    {
      id: 8,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-4-original.jpg'
    },
  ];

  return (
    <>
      <section className='our__projects__section' id='our-projects'>
        <div className="container">
          <h2 className='section__title' data-aos="zoom-in">Our Projects</h2>
        </div>
        <div className='projects__container'>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            // loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              390: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              }
            }}
            modules={[Autoplay, Navigation]}
            className="projects__slider"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={project.id}>
                <div
                  className='project__container'
                  data-aos='fade-up'
                  data-aos-delay={`${i}00`}
                >
                  <img src={project.src} alt="" />
                  <button onClick={() => setOpenSlider(true)}><AiOutlineCompress className='full__secreen__button' /></button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {openSlider && <FullScreenSlider onClose={setOpenSlider} />}
    </>
  )
}

export default OurProjects