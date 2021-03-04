import React, { useEffect } from 'react';
import smallArrow from '../img/btn-prev.png';
import thumbnail1 from '../img/thumb-minibanner-01.png';
import thumbnail2 from '../img/thumb-minibanner-02.png';
import thumbnail3 from '../img/thumb-minibanner-03.png';
import thumbnail4 from '../img/thumb-minibanner-04.png';
import thumbnail5 from '../img/thumb-minibanner-05.png';

const Thumbnail = () => {

  return (
    <section className='Swiper-thumb'>
      <div className='thumbnailsContainer'>
        <img src={smallArrow} alt='' className='smallArrow'/>
        <div className='thumbnails'>
          <img src={thumbnail1} alt='' className='thumbnail'/>
          <img src={thumbnail2} alt='' className='thumbnail'/>
          <img src={thumbnail3} alt='' className='thumbnail'/>
          <img src={thumbnail4} alt='' className='thumbnail'/>
          <img src={thumbnail5} alt='' className='thumbnail'/>
        </div>
        <img src={smallArrow} alt='' className='smallArrow r'/>
      </div>
    </section>
  );
}

export default Thumbnail;
