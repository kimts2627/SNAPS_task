import React from 'react';

const ChooseResult = () => {
  return (
    <div className='ChooseResult'>
      <section className='ChooseResult-list'>
        <div className='line1' />
        <div className='ChooseResult-list-container'>
          <div>
            <p>기본 / 거치대</p>
            <p>수량:1</p>
          </div>
          <p className='ChooseResult-list-price'>5000원</p>
        </div>
      </section>
      <section className='ChooseResult-price'>
        <div className='line2' />
        <div className='ChooseResult-price-container'>
          <p className='ChooseResult-price-container-desc1'>총 가격</p>
          <p className='ChooseResult-price-container-desc2'>5000원</p>
        </div>
      </section>
      <button className='Make'>만들기</button>
    </div>
  );
}

export default ChooseResult;
