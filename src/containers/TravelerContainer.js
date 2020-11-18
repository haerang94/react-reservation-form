import React from "react";
import TravelerList from "components/TravelerList";
import useInputs from "customHooks/useInputs";
const TravelerContainer = React.memo(() => {
  // focus는 현재 유효성 검사를 통과하지 못한 최초 부분을 가르킨다
  const [values, onChange, errors, , focus] = useInputs();
  console.log(values, "errors", errors);
  return (
    <div>
      <TravelerList
        values={values}
        onChange={onChange}
        errors={errors}
        cnt={values.length}
        focus={focus}
      ></TravelerList>
    </div>
  );
});

export default TravelerContainer;
