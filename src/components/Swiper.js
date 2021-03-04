import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Thumbnail from './Thumbnail.js';
import arrow from '../img/btn-prev-4040.png';
import showcase from '../showcase.js';

const Swiper = ({ currentPic, changePic }) => {

  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const changePicBtn = (e) => {
    // 왼쪽 or 오른쪽 화살표 클릭 시 왼쪽 or 오른쪽 사진으로 이동
    if(e.target.className === 'arrow' && currentPic > 0) {
      changePic(currentPic - 1);
    }
    else if(e.target.className === 'arrow r' && currentPic < 4) {
      changePic(currentPic + 1);
    }
  }

  return (
    <section className='Swiper'>
      <img src={arrow} alt='' className='arrow' onClick={(e) => changePicBtn(e)}/>
      <Slider {...settings} className='MainSlider'>
        {showcase.map(pic =>
          <SingleThumb key={pic.imagePath} src={`https://files.snaps.com${pic.imagePath}`}/>)}
      </Slider>
      <img src={arrow} alt='' className='arrow r' onClick={(e) => changePicBtn(e)}/>
      <Thumbnail currentPic={currentPic} changePic={changePic} />
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
