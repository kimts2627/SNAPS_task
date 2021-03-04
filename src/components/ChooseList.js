import React from 'react';
import options from '../options';

const ChooseList = () => {

  return (
    <div className='ChooseList'>
      <div className='ChooseList-type'>
        <h4>{options[0].title}</h4>
        {options[0].child.map(child => 
          <button
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
            className='ChooseList-option-button'
            key={child.value}
          >
            {child.label}
          </button>)}
      </div>
      <div className='ChooseList-count'>
        <h4>수량</h4>
        <div>
          <aside className='asideLeft'>-</aside>
          <p>1</p>
          <aside className='asideRight'>+</aside>
        </div>
      </div>
    </div>
  );
}

export default ChooseList;
