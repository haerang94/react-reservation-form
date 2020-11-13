import React from "react";
import OtherInfo from "components/OtherInfo";
import useInputs from "customHooks/useInputs";

const OtherInfoContainer = () => {
  const [values, onChange, errors] = useInputs();

  return (
    <OtherInfo values={values} onChange={onChange} errors={errors}></OtherInfo>
  );
};

export default OtherInfoContainer;
