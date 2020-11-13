import { createAction, handleActions } from "redux-actions";

const GET_INFO = "info/GET_INFO";
const SET_INFO = "info/SET_INFO";
const SET_INFO_ERRORS = "info/SET_INFO_ERRORS";

// 시간, 분, 기타 정보의 기준은 idx가 0인 곳 기준으로 한다
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
      hour: "시",
      minute: "분",
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
};

export const getInfo = createAction(GET_INFO);
export const setInfo = createAction(SET_INFO, (info) => info);
export const setInfoErrors = createAction(SET_INFO_ERRORS, (errors) => errors);

const info = handleActions(
  {
    [SET_INFO]: (state, { payload: info }) => ({ ...state, info }),
    [SET_INFO_ERRORS]: (state, { payload: errors }) => ({
      ...state,
      info_errors: errors,
    }),
  },
  initialState
);

export default info;
