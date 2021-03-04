import React, { useEffect } from 'react';
import Slider from 'react-slick';
import swiperData from '../img/showcase.js';

const Swiper = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className='Swiper'>
      <Slider {...settings} className='MainSlider'>
        {swiperData.map(data => <SingleThumb src={data.imagePath}/>)}
      </Slider>
    </section>
  );
}

const SingleThumb = ({ src }) => {

  return(
    <div>
      <img src={src} alt=''/>
    </div>
  );
}

export default Swiper;
