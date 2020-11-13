import React from "react";
import Terms from "components/Terms";
import useInputs from "customHooks/useInputs";
import useCheckboxes from "customHooks/useCheckboxes";
const TermsContainer = () => {
  const [values, onClick, reset, checked] = useCheckboxes();

  return (
    <Terms
      values={values}
      onClick={onClick}
      reset={reset}
      checked={checked}
    ></Terms>
  );
};

export default TermsContainer;
