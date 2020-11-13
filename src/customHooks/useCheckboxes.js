import { useState, useCallback } from "react";
import checkTerms from "utils/termsCheck";
function useCheckboxes(initialForm) {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState({});

  const onClick = useCallback(
    (e) => {
      // e.persist();
      const { name, value, checked } = e.target;
      console.log(name, value, checked);
      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      // setChecked(checkTerms(name, newValues, checked));
    },
    [values]
  );
  const reset = useCallback(() => setValues(initialForm), [initialForm]);
  return [values, onClick, reset, checked];
}

export default useCheckboxes;
