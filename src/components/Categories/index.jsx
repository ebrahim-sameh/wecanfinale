import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/shot 4.png'
import Image2 from '../images/2.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import './Categories.scss'

const Categories = () => {

  const categories = [
    {
      id: 1,
      title: 'Optical store design',
      href: '/optical-store-design',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image
    },
    {
      id: 2,
      title: 'Interior design',
      href: '/interior-design',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image
    },
    {
      id: 3,
      title: 'Kitchens',
      href: '/kitchens',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image
    },
    {
      id: 4,
      title: 'Accessories',
      href: '/accessories',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image2
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='categories__section'>
      <h2 className="section__title" data-aos="zoom-in">Categories</h2>
      <p className='section__subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="categorise__container">
        {categories.map((category, i) => (
          <div key={category.id} className='signle__category' data-aos="fade-up" data-aos-delay={`${i}00`}>
            <Link to={category.href}>Show More</Link>
            <img src={category.img} alt='Category__image' />
            <div className='category__details'>
              <h4>{category.title}</h4>
              <p>{category.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories