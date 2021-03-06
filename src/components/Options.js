import React from 'react';
import ChooseList from './ChooseList';
import ChooseResult from './ChooseResult';

const Options = ({ selectedOptions, changeOptions, isNumberEditMode, changeEditMode }) => {

  return (
    <section className='Options'>
      <h1>옵션 선택</h1>
      <ChooseList
        changeOptions={changeOptions}
        selectedOptions={selectedOptions}
      />
      <ChooseResult selectedOptions={selectedOptions}/>
      <OptionsFooter />
    </section>
  );
}

const OptionsFooter = () => {
  return (
    <section className='OptionsFooter'>
      <div className='footerWrap'>
        <div className='footerContainer'>
          <span className='bullet'/>
          <p>사이즈</p>
        </div>
        <p className='greyFont'>15cm x 30cm</p>
      </div>
      <div className='footerWrap'>
        <div className='footerContainer'>
          <span className='bullet'/>
          <p>배송안내</p>
        </div>
        <p className='greyFont'>제작 1일 및 택배배송 1~2일 소요</p>
      </div>
      <div className='footerWrap'>
        <div className='footerContainer'>
          <span className='bullet'/>
          <p>배송료</p>
        </div>
        <p className='greyFont'>2,500원 (5만원 이상 주문 시 무료)</p>
      </div>
    </section>
  );
}

export default Options;
