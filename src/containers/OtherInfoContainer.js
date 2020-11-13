import React from "react";
import OtherInfo from "components/OtherInfo";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const OtherInfoContainer = () => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  const [values, onChange, errors] = useInputs(info);

  return (
    <OtherInfo values={values} onChange={onChange} errors={errors}></OtherInfo>
  );
};

export default OtherInfoContainer;
