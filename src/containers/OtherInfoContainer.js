import React from "react";
import OtherInfo from "components/OtherInfo";
import useInputs from "customHooks/useInputs";

const OtherInfoContainer = () => {
  const [values, onChange, errors, , focus] = useInputs();

  return (
    <OtherInfo
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></OtherInfo>
  );
};

export default OtherInfoContainer;
