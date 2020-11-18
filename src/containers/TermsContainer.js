import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
import useInputs from "customHooks/useInputs";

const TermsContainer = React.memo(() => {
  // 약관 체크박스를 토글해주는 역할을 한다
  const [values, onChange] = useCheckboxes();
  console.log("terms container");
  // 결제하기 버튼을 클릭하면 전체 유효성 검사를 한다
  const [, , , onSubmit] = useInputs();

  return (
    <Terms values={values} onChange={onChange} onSubmit={onSubmit}></Terms>
  );
});

export default TermsContainer;
