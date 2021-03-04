import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Thumbnail from './Thumbnail.js';
import thumbnail1 from '../img/thumb-minibanner-01.png';
import thumbnail2 from '../img/thumb-minibanner-02.png';
import thumbnail3 from '../img/thumb-minibanner-03.png';
import thumbnail4 from '../img/thumb-minibanner-04.png';
import thumbnail5 from '../img/thumb-minibanner-05.png';
import arrow from '../img/btn-prev-4040.png';

const Swiper = () => {

  let settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className='Swiper'>
      <img src={arrow} alt='' className='arrow' />
      <Slider {...settings} className='MainSlider'>
        <div>
          <img src={thumbnail1} alt='' />
        </div>
        <div>
          <img src={thumbnail2} alt='' />
        </div>
        <div>
          <img src={thumbnail3} alt='' />
        </div>
        <div>
          <img src={thumbnail4} alt='' />
        </div>
        <div>
          <img src={thumbnail5} alt='' />
        </div>
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
