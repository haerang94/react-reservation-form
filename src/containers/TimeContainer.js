import React from "react";
import Time from "components/Time";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const TimeContainer = () => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  const [values, onChange, errors] = useInputs(info);
  return <Time values={values} onChange={onChange} errors={errors}></Time>;
};

export default TimeContainer;
