import React, { useEffect } from 'react'
import Image from '../../components/images/2.jpg'
import Image2 from '../../components/images/Capture1.PNG'
import Image3 from '../../components/images/shot 4.png'
import Image4 from '../../components/images/shot1 t.png'

import './SingleCategry.scss'

const SignleCategory = ({ data }) => {

  const projects = [
    {
      id: 1,
      title: 'Project Name',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image
    },
    {
      id: 2,
      title: 'Project Name',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image2
    },
    {
      id: 3,
      title: 'Project Name',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image3
    },
    {
      id: 4,
      title: 'Project Name',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image4
    },
    {
      id: 5,
      title: 'Project Name',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
      img: Image
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='category__section'>
      <div className="container">
        <h2 className='section__title'>{data.title}</h2>
        <p className='section__subtitle'>{data.desc}</p>
          <div className="single__cayegor__content">
            {projects.map(project => (
              <div className='single__project' key={project.id}>
                <h3>{project.title}</h3>
                <div className='project__images'>
                  <div>
                    <img src={project.img} alt='project__image' />
                  </div>
                  <div>
                    <img src={project.img} alt='project__image' />
                  </div>
                  <div>
                    <img src={project.img} alt='project__image' />
                  </div>
                </div>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default SignleCategory