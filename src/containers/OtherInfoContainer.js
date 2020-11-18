import React from "react";
import OtherInfo from "components/OtherInfo";
import useInputs from "customHooks/useInputs";

const OtherInfoContainer = React.memo(() => {
  const [values, onChange, errors, , focus] = useInputs();
  console.log("otherInfo container");
  // 전역 상태를 useInputs라는 커스텀 훅을 통해서 사용한다
  return (
    <OtherInfo
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></OtherInfo>
  );
});

export default OtherInfoContainer;
