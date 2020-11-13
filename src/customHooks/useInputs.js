import { useState, useCallback } from "react";
import valid from "utils/validation";
function useInputs() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value, checked } = e.target;

      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      setErrors(valid(name, newValues, checked));
    },
    [values]
  );

  return [values, onChange, errors];
}

export default useInputs;
