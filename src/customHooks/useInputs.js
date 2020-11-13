import { useState, useCallback, useEffect } from "react";
import { valid, validSubmit } from "utils/validation";
function useInputs() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [errors2, setErrors2] = useState({});
  const [submittable, setSubmittable] = useState(false);

  useEffect(() => {}, [errors]);
  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;

      const newValues = { ...values, [name]: value };
      setValues((values) => ({ ...values, [name]: value }));
      setErrors(valid(name, newValues));
    },
    [values]
  );

  const onSubmit = useCallback(
    (e) => {
      e.persist();
      setErrors2(valid("none", values, "submit"));
      const res = valid("none", values, "submit");
      console.log("res", res);
      if (valid("none", values, "submit") === {}) {
        console.log(valid("none", values, "submit"));
        setSubmittable(true);
        alert("결제");
      } else {
        setSubmittable(false);
      }
    },
    [values]
  );

  return [values, onChange, errors, onSubmit, errors2];
}

export default useInputs;
