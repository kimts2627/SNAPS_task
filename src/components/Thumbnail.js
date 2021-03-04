import React, { useEffect } from 'react';
import smallArrow from '../img/btn-prev.png';
import showcase from '../showcase';


const Thumbnail = () => {

  return (
    <section className='Swiper-thumb'>
      <div className='thumbnailsContainer'>
        <img src={smallArrow} alt='' className='smallArrow'/>
        <div className='thumbnails'>
          {showcase.map(pic => <SingleSmallThumb key={pic.thumbnailImagePath} src={`https://files.snaps.com${pic.thumbnailImagePath}`}/>)}
        </div>
        <img src={smallArrow} alt='' className='smallArrow r'/>
      </div>
    </section>
  );
}

const SingleSmallThumb = ({ src, key }) => {

  return(
    <img src={src} alt='' className='thumbnail' />
  );
}

export default Thumbnail;
