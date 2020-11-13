import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";

const TimeContainer = () => {
  const [values, onChange, errors] = useInputs();
  return <Time values={values} onChange={onChange} errors={errors}></Time>;
};

export default TimeContainer;
