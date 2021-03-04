import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Thumbnail from './Thumbnail.js';
import arrow from '../img/btn-prev-4040.png';
import showcase from '../showcase.js';

const Swiper = () => {

  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className='Swiper'>
      <img src={arrow} alt='' className='arrow' />
      <Slider {...settings} className='MainSlider'>
        {showcase.map(pic => <SingleThumb key={pic.imagePath} src={`https://files.snaps.com${pic.imagePath}`}/>)}
      </Slider>
      <img src={arrow} alt='' className='arrow r' />
      <Thumbnail />
    </section>
  );
}

const SingleThumb = ({ src, key }) => {

  return(
    <div className='SingleThumb'>
      <img src={src} alt=''/>
    </div>
  );
}

export default Swiper;
