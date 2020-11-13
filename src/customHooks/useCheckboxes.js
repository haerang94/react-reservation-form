import { useState, useCallback } from "react";
import checkingTerms from "utils/termsCheck";
function useCheckboxes() {
  const [values, setValues] = useState({
    allTerms: false,
    travelerTerm: false,
    bargainTerm: false,
  });

  const onClick = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;
      const newValues = { ...values, [name]: !values[name] };
      setValues((values) => ({ ...values, [name]: value }));
      setValues(checkingTerms(name, newValues));
    },
    [values]
  );

  return [values, onClick];
}

export default useCheckboxes;
