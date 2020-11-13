import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";
const TimeContainer = () => {
  const [values, onChange, reset, errors] = useInputs();
  return (
    <Time
      values={values}
      onChange={onChange}
      reset={reset}
      errors={errors}
    ></Time>
  );
};

export default TimeContainer;
