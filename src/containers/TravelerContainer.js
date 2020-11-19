import React, { useCallback, useMemo } from "react";
import TravelerList from "components/TravelerList";
import useInputs from "customHooks/useInputs";
const TravelerContainer = React.memo(() => {
  // focus는 현재 유효성 검사를 통과하지 못한 최초 부분을 가르킨다
  const [values, onChange, errors, , focus] = useInputs();
  console.log("traveler container");
  const newValues = useMemo(() => values, [values]);
  const handleChange = useCallback(
    (e) => {
      onChange(0, e);
    },
    [onChange]
  );
  return (
    <div>
      <TravelerList
        values={newValues}
        onChange={handleChange}
        errors={errors}
        cnt={values.length}
        focus={focus}
      ></TravelerList>
    </div>
  );
});

export default TravelerContainer;
