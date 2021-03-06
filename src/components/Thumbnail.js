import React, { useEffect } from 'react';
import smallArrow from '../img/btn-prev.png';
import showcase from '../showcase';


const Thumbnail = ({ currentPic, changePic }) => {

  useEffect(() => {
    // currentPic 번호에 따라 해당하는 썸네일 강조스타일 적용
    if(document.querySelector('.thumbnail-selected')) {
      document.querySelector('.thumbnail-selected').classList = 'thumbnail';
    }
    let smallThumbnails = document.querySelectorAll('.thumbnail');
    for(let i of smallThumbnails) {
      if(i.src === `https://files.snaps.com${showcase[currentPic].imagePath}`) {
        i.classList = 'thumbnail-selected';
      }
    }
  }, [currentPic]);

  const changePicThumbnailBtn = (e) => {
    // 왼쪽 or 오른쪽 화살표 클릭 시 왼쪽 or 오른쪽 사진으로 이동
    if(e.target.className === 'smallArrow' && currentPic > 0) {
      changePic(currentPic - 1);
    }
    else if(e.target.className === 'smallArrow r' && currentPic < 4) {
      changePic(currentPic + 1);
    }
  }

  return (
    <section className='Swiper-thumb'>
      <div className='thumbnailsContainer'>
        <img src={smallArrow} alt='' className='smallArrow' onClick={(e) => changePicThumbnailBtn(e)}/>
        <div className='thumbnails'>
          {showcase.map(pic =>
            <SingleSmallThumb
              src={`https://files.snaps.com${pic.thumbnailImagePath}`}
              changePic={changePic}
              key={pic.thumbnailImagePath.slice(37)}
            />
          )}
        </div>
        <img src={smallArrow} alt='' className='smallArrow r' onClick={(e) => changePicThumbnailBtn(e)}/>
      </div>
    </section>
  );
}

const SingleSmallThumb = ({ src, changePic }) => {

  const handleThumbnailClick = () => {
    for(let i = 0; i < showcase.length; i ++) {
      if(src === `https://files.snaps.com${showcase[i].thumbnailImagePath}`) {
        changePic(i);
      }
    }
  }

  return(
    <img src={src} alt='' className='thumbnail' onClick={handleThumbnailClick}/>
  );
}

export default Thumbnail;
