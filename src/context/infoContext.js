import React, { useReducer, createContext, useContext } from "react";

// 정보 다시 set하기
const SET_INFO = "info/SET_INFO";
// 에러 정보 set
const SET_INFO_ERRORS = "info/SET_INFO_ERRORS";
// 유효성 검사 통과하지 못한 부분
const SET_FOCUS = "info/FOCUS";

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

function infoReducer(state, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, info: action.info };
    case SET_INFO_ERRORS:
      return { ...state, info_errors: action.info_errors };
    case SET_FOCUS:
      return { ...state, focus: action.focus };
    default:
      return state;
  }
}

const InfoStateContext = createContext();
const InfoDispatchContext = createContext();

export function InfoProvider({ children }) {
  const [state, dispatch] = useReducer(infoReducer, initialState);
  return (
    <InfoStateContext.Provider value={state}>
      <InfoDispatchContext.Provider value={dispatch}>
        {children}
      </InfoDispatchContext.Provider>
    </InfoStateContext.Provider>
  );
}

export function useInfoState() {
  const context = useContext(InfoStateContext);
  if (!context) {
    throw new Error("canant find useInfoProvider");
  }
  return context;
}

export function useInfoDispatch() {
  const context = useContext(InfoDispatchContext);
  if (!context) {
    throw new Error("cannt find infoProvider");
  }
  return context;
}
