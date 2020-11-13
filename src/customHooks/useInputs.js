import { useCallback } from "react";
import { valid } from "utils/validation";
import { setInfo, setInfoErrors, setFocus } from "modules/info";
import { useSelector, useDispatch } from "react-redux";

// 전역 상태를 가져와서 사용하는 커스텀 훅
function useInputs() {
  // 모든 상태 정보와 에러정보, 유효성 검사를 통과하지 못한 최초의 부분에 대한 정보를 가져온다
  const { info, info_errors, focus } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
    focus: state.info.focus,
  }));

  const dispatch = useDispatch();

  // input, select 의 onChange기능을 구현한다
  const onChange = useCallback(
    (idx, e) => {
      // idx는 현재 사용자의 번호이다
      e.persist();
      let { name, value } = e.target;
      // 여행자가 여럿일 경우 이름이 겹치는 것을 막아주기 위해 name을 다르게 설정하고 데이터에 저장할 때는 각 배열 요소 객체의 파라미터로 gender로 넣어준다
      // 자르기 전 name은 gender-1 의 형식이다
      if (name.slice(0, 6) === "gender") {
        name = "gender";
      }
      // 불변성 유지, 새로운 데이터 객체 생성
      const newInfo = [...info];
      newInfo[idx] = { ...info[idx], [name]: value };
      // 새로운 에러 객체 생성
      const newErrors = [...info_errors];
      //현재 사용자의 에러 정보를 업데이트하여 가져온다
      const temp = valid(newInfo[idx], name, info_errors[idx], idx);
      // 새로운 에러 객체 업데이트
      newErrors[idx] = temp;
      // 전역 상태 변경
      dispatch(setInfo(newInfo));
      dispatch(setInfoErrors(newErrors));
    },
    [info, dispatch, info_errors]
  );

  const onSubmit = useCallback(
    (e) => {
      e.persist();
      // 제출 시 모든 유효성 검사를 한다
      const newErrors = [...info_errors];
      for (let i = 0; i < info.length; i++) {
        // 두 번째 파라미터 null은 onChange시의 validation검사와 구별된다
        // 두번째 파라미터는 현재 어떤 요소를 검사하는가를 나타낸다
        const temp = valid(info[i], null, info_errors[i], i);
        newErrors[i] = temp;
      }
      // 계속해서 에러정보 업데이트
      dispatch(setInfoErrors(newErrors));

      // 새로운 에러객체를 돌며 최초로 유효성검사를 통과하지 못한 부분을 찾는다
      for (const [key, value] of Object.entries(newErrors)) {
        for (const [k, v] of Object.entries(value)) {
          // 사용자가 여럿일 경우 시간이 아니라 사용자2, 3부터 검사하기 위해서 탈출한다
          if (k === "hour") break;
          if (v) {
            //  key는 사용자의 인덱스 정보, k는 어떤 요소인지 나타낸다
            dispatch(setFocus([key, k]));
            return;
          }
        }
      }
      //  사용자들 검사가 다 끝난 후 기타 정보의 유효성 검사를 통과하지 못한 부분을 찾는다
      // 기타 정보들은 인덱스 0을 기준으로 한다
      for (const [k, v] of Object.entries(newErrors[0])) {
        if (v) {
          dispatch(setFocus([0, k]));
          return;
        }
      }
      // 모든 유효성 검사를 통과했다면 예약 완료
      alert("예약이 완료되었습니다.");
    },
    [info, dispatch, info_errors]
  );

  return [info, onChange, info_errors, onSubmit, focus];
}

export default useInputs;
