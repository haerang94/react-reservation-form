import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";

const TimeContainer = React.memo(() => {
  const [values, onChange, errors, , focus] = useInputs();
  console.log("time container");
  return (
    <Time
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></Time>
  );
});

export default TimeContainer;
