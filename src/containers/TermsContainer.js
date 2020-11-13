import React from "react";
import Terms from "components/Terms";
import useCheckboxes from "customHooks/useCheckboxes";
const TermsContainer = () => {
  const [values, onChange, reset] = useCheckboxes({
    allTerms: false,
    travelerTerm: false,
    bargainTerm: false,
  });
  return <Terms values={values} onChange={onChange} reset={reset}></Terms>;
};

export default TermsContainer;
