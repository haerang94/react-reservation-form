import { useState, useCallback } from "react";
import checkingTerms from "utils/termsCheck";
function useCheckboxes(initialForm) {
  const [values, setValues] = useState(initialForm);

  const onClick = useCallback(
    (e) => {
      e.persist();
      const { name, value, checked } = e.target;
      const newValues = { ...values, [name]: !values[name] };
      setValues((values) => ({ ...values, [name]: value }));
      setValues(checkingTerms(name, newValues));
    },
    [values]
  );
  const reset = useCallback(() => setValues(initialForm), [initialForm]);
  return [values, onClick, reset];
}

export default useCheckboxes;
