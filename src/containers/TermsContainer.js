import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
const TermsContainer = () => {
  const [values, onChange] = useCheckboxes();
  return <Terms values={values} onChange={onChange}></Terms>;
};

export default TermsContainer;
