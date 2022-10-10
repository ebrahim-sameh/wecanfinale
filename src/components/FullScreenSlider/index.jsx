import React from 'react'
import ImageGallery from 'react-image-gallery'
import { MdClose } from 'react-icons/md'

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import './FullScreenSlider.scss'

const FullScreenSlider = ({ onClose }) => {

  const images = [
    {
      original: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg',
      thumbnail: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg',
    },
    {
      original: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg',
      thumbnail: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg',
    },
    {
      original: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-2-original.jpg',
      thumbnail: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-2-original.jpg',
    },
    {
      original: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-4-original.jpg',
      thumbnail: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-4-original.jpg',
    },
    {
      original: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg',
      thumbnail: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg',
    }
  ];

  return (
    <div className='fullscreen__slider'>
      <div className="overlay__"></div>
      <button className='close__btn' onClick={() => onClose(false)}><MdClose /></button>
      <div className="slider__content">
        <ImageGallery 
           items={images}  
           infinite={true}
           lazyLoad={true}
           startIndex={0}
           autoPlay={true}
           slideDuration={500}
           className='full__slider'
        />
      </div>
    </div>
  )
}

export default FullScreenSlider