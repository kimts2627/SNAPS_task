// 액션
const CHANGE_OPTIONS = 'options/CHANGE_OPTIONS';

// 액션 생성 함수
export const changeOptions = (options) => ({
  type: CHANGE_OPTIONS,
  payload: {
    options
  }
});

// 스테이트 초기값
const initialState = {
  selectedOptions: {
    type: null,
    option: null,
    number: 1
  }
}

// 리듀서
const options = (state = initialState, action) => {
  switch(action) {
    case CHANGE_OPTIONS:
      return Object.assign({}, state, { selectedOptions: action.payload.options });
    default:
      return state;
  }
}

export default options;
