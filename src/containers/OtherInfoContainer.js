import React from "react";
import OtherInfo from "components/OtherInfo";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const OtherInfoContainer = () => {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const [values, onChange, errors] = useInputs(info, info_errors);

  return (
    <OtherInfo values={values} onChange={onChange} errors={errors}></OtherInfo>
  );
};

export default OtherInfoContainer;
