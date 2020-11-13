import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
import useInputs from "customHooks/useInputs";
const TermsContainer = React.memo(() => {
  const [values, onChange] = useCheckboxes();
  const [, , errors, onSubmit, errors2] = useInputs();
  // console.log(errors);
  // console.log(errors2);
  return (
    <Terms values={values} onChange={onChange} onSubmit={onSubmit}></Terms>
  );
});

export default TermsContainer;
