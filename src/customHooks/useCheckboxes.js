import { useState, useCallback } from "react";
import checkingTerms from "utils/termsCheck";

// 약관 체크 박스를 토글하는 기능 구현하는 커스텀 훅
function useCheckboxes() {
  // 초기 체크 박스 상태는 모두 false이다
  const [values, setValues] = useState({
    allTerms: false,
    travelerTerm: false,
    bargainTerm: false,
  });

  const onClick = useCallback(
    (e) => {
      // 리액트의 e객체는 syntheticevent로 비동기 처리시 null값이 되어 경고나타남
      // e.persist()로 해결
      e.persist();
      const { name, value } = e.target;
      // 현재 체크박스를 토글하여 새 객체를 생성
      const newValues = { ...values, [name]: !values[name] };
      // 경우에 따라서 체크박스를 토글해주는 기능 구현한 checkingTerms로 바뀌는 부분 적용
      setValues(checkingTerms(name, newValues));
    },
    [values]
  );

  return [values, onClick];
}

export default useCheckboxes;
