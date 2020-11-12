import { useState, useCallback, useEffect } from "react";
import valid from "utils/validation";
function useInputs(initialForm) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(values);
  }, []);
  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;
      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      setErrors(valid(newValues));
    },
    [values]
  );
  const reset = useCallback(() => setValues(initialForm), [initialForm]);
  return [values, onChange, reset, errors];
}

export default useInputs;
