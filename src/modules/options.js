// 액션
const CHANGE_OPTIONS = 'options/CHANGE_OPTIONS';
const CHANGE_EDIT_MODE = 'options/CHANGE_EDIT_MODE';

// 액션 생성 함수
export const changeOptions = (options) => ({
  type: CHANGE_OPTIONS,
  payload: {
    options
  }
});
export const changeEditMode = () => ({
  type: CHANGE_EDIT_MODE
});

// 스테이트 초기값
const initialState = {
  selectedOptions: {
    type: '기본',
    option: '거치대',
    number: 1
  },
  isNumberEditMode: false
}

// 리듀서
const options = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_OPTIONS:
      return Object.assign({}, state, { selectedOptions: action.payload.options });
    case CHANGE_EDIT_MODE:
      return Object.assign({}, state, { isNumberEditMode: !state.isNumberEditMode });
    default:
      return state;
  }
}

export default options;
