import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";

const TimeContainer = () => {
  const [values, onChange, errors, , focus] = useInputs();
  return (
    <Time
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></Time>
  );
};

export default TimeContainer;
