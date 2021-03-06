import React, { useEffect, useRef } from 'react';
import options from '../options';

const ChooseList = ({ selectedOptions, changeOptions, isNumberEditMode, changeEditMode }) => {

  const inputRef = useRef();

  const handleChange = (e) => {
    // input 태그 value를 state에 핸들링
    let value = e.target.value;
    if(!value) {
      value = 1;
    }
    if(value < 1) {
      return alert('수량은 1개 미만, 999개 초과일 수 없습니다.');
    }
    else if(value > 999) {
      return alert('수량은 1개 미만, 999개 초과일 수 없습니다.');
    }
    changeOptions(Object.assign({}, selectedOptions, { number: e.target.value }))
  } 

  useEffect(() => {
    // input 태그와 수량 상태를 동기화
    if(selectedOptions.number !== inputRef.current.value) {
      inputRef.current.value = selectedOptions.number;
    }
    if(selectedOptions.number < 1) {
      changeOptions(Object.assign({}, selectedOptions, { number: 1 }));
    }
    else if(selectedOptions.number > 999) {
      changeOptions(Object.assign({}, selectedOptions, { number: 999 }));
    }
  }, [selectedOptions]);

  useEffect(() => {
    // 선택된 옵션에 따라 강조스타일 부여하기
    let typeLists = document.querySelectorAll('.ChooseList-type-button');
    let optionLists = document.querySelectorAll('.ChooseList-option-button');
    for(let i of typeLists) {
      if(i.textContent === selectedOptions.type) {
        i.classList = 'ChooseList-type-button-selected';
      }
    }
    for(let i of optionLists) {
      if(i.textContent === selectedOptions.option) {
        i.classList = 'ChooseList-option-button-selected';
      }
    }
  }, [selectedOptions])

  const changeOptionBtn = (e) => {
    // 타입 핸들링
    if(e.target.className === 'ChooseList-type-button') {
      let newOptions = Object.assign({}, selectedOptions, { type: e.target.textContent });
      changeOptions(newOptions);
      document.querySelector('.ChooseList-type-button-selected').classList = 'ChooseList-type-button';
    }
    // 옵션 핸들링
    else if(e.target.className === 'ChooseList-option-button') {
      let newOptions = Object.assign({}, selectedOptions, { option: e.target.textContent });
      changeOptions(newOptions);
      document.querySelector('.ChooseList-option-button-selected').classList = 'ChooseList-option-button';
    }
    // 수량 - 핸들링
    else if(e.target.textContent === '-' && selectedOptions.number > 1) {
      let newOptions = Object.assign({}, selectedOptions, { number: selectedOptions.number - 1 });
      changeOptions(newOptions);
    }
    // 수량 + 핸들링
    else if(e.target.textContent === '+' && selectedOptions.number < 999) {
      let newOptions = Object.assign({}, selectedOptions, { number: selectedOptions.number + 1 });
      changeOptions(newOptions);
    }
  }

  return (
    <div className='ChooseList'>
      <div className='ChooseList-type'>
        <h4>{options[0].title}</h4>
        {options[0].child.map(child => 
          <button
            onClick={(e) => changeOptionBtn(e)}
            className='ChooseList-type-button'
            key={child.value}
          >
            {child.label}
          </button>)}
      </div>
      <div className='ChooseList-option'>
        <h4>{options[1].title}</h4>
        {options[1].child.map(child => 
          <button
            onClick={(e) => changeOptionBtn(e)}
            className='ChooseList-option-button'
            key={child.value}
          >
            {child.label}
          </button>)}
      </div>
      <div className='ChooseList-count'>
        <h4>수량</h4>
        <div>
          <aside className='asideLeft' onClick={(e) => changeOptionBtn(e)}>-</aside>
          <input type='text' ref={inputRef} onChange={(e) => handleChange(e)}/>
          <aside className='asideRight' onClick={(e) => changeOptionBtn(e)}>+</aside>
        </div>
      </div>
    </div>
  );
}

export default ChooseList;
