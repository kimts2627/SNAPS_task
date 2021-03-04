import React from 'react';

const ChooseResult = ({ selectedOptions }) => {

  const MakeResult = () => {
    const { type, option, number } = selectedOptions;
    console.log(`선택된 옵션 목록은 ${type} / ${option} / ${number}개 입니다!`);
    alert('주문서가 콘솔창에 출력 되었습니다!');
  }

  return (
    <div className='ChooseResult'>
      <section className='ChooseResult-list'>
        <div className='line1' />
        <div className='ChooseResult-list-container'>
          <div>
            <p>{`${selectedOptions.type} / ${selectedOptions.option}`}</p>
            <p>{`수량: ${selectedOptions.number}`}</p>
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
      <button className='Make' onClick={MakeResult}>만들기</button>
    </div>
  );
}

export default ChooseResult;
