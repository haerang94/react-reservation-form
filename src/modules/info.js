import { createAction, handleActions } from "redux-actions";

const GET_INFO = "info/GET_INFO";
// 정보 다시 set하기
const SET_INFO = "info/SET_INFO";
// 에러 정보 set
const SET_INFO_ERRORS = "info/SET_INFO_ERRORS";
// 유효성 검사 통과하지 못한 부분
const SET_FOCUS = "info/FOCUS";

// 시간, 분, 기타 정보의 기준은 idx가 0인 곳 기준으로 한다
// info는 사용자 정보를 나타낸다
// info_errors는 유효성 검사를 통과하지 못한 부분의 메세지를 담는 곳이다
const initialState = {
  info: [
    {
      firstName: null,
      lastName: null,
      koreanName: null,
      gender: null,
      birthdate: null,
      hour: "시",
      minute: "분",
    },
    {
      firstName: null,
      lastName: null,
      koreanName: null,
      gender: null,
      birthdate: null,
    },
  ],
  info_errors: [
    {
      firstName: null,
      lastName: null,
      koreanName: null,
      gender: null,
      birthdate: null,
    },
    {
      firstName: null,
      lastName: null,
      koreanName: null,
      gender: null,
      birthdate: null,
      hour: null,
      minute: null,
    },
  ],
  focus: [],
};
// 액션 생성 함수
export const getInfo = createAction(GET_INFO);
export const setInfo = createAction(SET_INFO, (info) => info);
export const setInfoErrors = createAction(SET_INFO_ERRORS, (errors) => errors);
export const setFocus = createAction(SET_FOCUS, (focus) => focus);
//  리듀서
const info = handleActions(
  {
    [SET_INFO]: (state, { payload: info }) => ({ ...state, info }),
    [SET_INFO_ERRORS]: (state, { payload: errors }) => ({
      ...state,
      info_errors: errors,
    }),
    [SET_FOCUS]: (state, { payload: focus }) => ({
      ...state,
      focus,
    }),
  },
  initialState
);

export default info;
