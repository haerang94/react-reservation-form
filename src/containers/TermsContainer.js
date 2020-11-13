import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";

const TermsContainer = React.memo(() => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  const [values, onChange] = useCheckboxes();
  const [v, on, errors, onSubmit] = useInputs(info);
  console.log(info);
  return (
    <Terms values={values} onChange={onChange} onSubmit={onSubmit}></Terms>
  );
});

export default TermsContainer;
