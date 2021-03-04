import React from 'react';

const ChooseList = () => {
  return (
    <div className='ChooseList'>
      <div className='ChooseList-type'>
        <h4>타입</h4>
        <button className='ChooseList-type-button-point'>기본</button>
        <button className='ChooseList-type-button'>투명</button>
        <button className='ChooseList-type-button'>캔버스</button>
      </div>
      <div className='ChooseList-option'>
        <h4>옵션</h4>
        <button className='ChooseList-option-button-point'>거치대</button>
        <button className='ChooseList-option-button'>거치대 없음</button>
      </div>
      <div className='ChooseList-count'>
        <h4>수량</h4>
        <div>
          <aside>-</aside>
          <p>1</p>
          <aside>+</aside>
        </div>
      </div>
    </div>
  );
}

export default ChooseList;
