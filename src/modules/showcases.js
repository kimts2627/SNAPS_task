import showcase from '../showcase';

// 액션
const CHANGE_PIC = 'showcases/CHANGE_PIC';

// 액션 생성 함수
export const changePic = (pic) => ({
  type: CHANGE_PIC,
  payload: {
    pic
  }
});

// 스테이트 초기값
const initialState = {
  currentPic: showcase[0]
}

// 리듀서
const showcases = (state = initialState, action) => {
  switch(action) {
    case CHANGE_PIC:
      return Object.assign({}, state, { currentPic: action.payload.pic });
    default:
      return state;
  }
}

export default showcases;
