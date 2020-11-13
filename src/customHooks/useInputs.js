import { useState, useCallback } from "react";
import valid from "utils/validation";
function useInputs(initialForm) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value, checked } = e.target;
      console.log(name, value, checked);
      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      setErrors(valid(name, newValues, checked));
    },
    [values]
  );
  const reset = useCallback(() => setValues(initialForm), [initialForm]);
  return [values, onChange, reset, errors];
}

export default useInputs;
