import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";

const TermsContainer = React.memo(() => {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const [values, onChange] = useCheckboxes();
  const [v, on, errors, onSubmit] = useInputs(info, info_errors);
  console.log(info, info_errors);
  return (
    <Terms values={values} onChange={onChange} onSubmit={onSubmit}></Terms>
  );
});

export default TermsContainer;
