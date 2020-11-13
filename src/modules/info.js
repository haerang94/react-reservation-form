import { createAction, handleActions } from "redux-actions";

const GET_INFO = "info/GET_INFO";
const SET_INFO = "info/SET_INFO";

const initialState = {
  info: {
    firstName: null,
    lastName: null,
    koreanName: null,
    gender: null,
    birthdate: null,
  },
};

export const getInfo = createAction(GET_INFO);
export const setInfo = createAction(SET_INFO, (info) => info);

const info = handleActions(
  {
    [SET_INFO]: (state, { payload: info }) => ({ info }),
  },
  initialState
);

export default info;
