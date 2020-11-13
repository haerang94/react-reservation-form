import { useCallback } from "react";
import { valid } from "utils/validation";
import { setInfo, setInfoErrors } from "modules/info";
import { useSelector, useDispatch } from "react-redux";

function useInputs() {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      e.persist();
      const { name, value } = e.target;
      const newValues = { ...info, [name]: value };

      const newErrors = valid(newValues, name, info_errors);
      dispatch(setInfo(newValues));
      dispatch(setInfoErrors(newErrors));
    },
    [info, dispatch, info_errors]
  );

  const onSubmit = useCallback(
    (e) => {
      e.persist();
      const newErrors = valid(info, null, info_errors);
      dispatch(setInfoErrors(newErrors));
      for (const value of Object.values(newErrors)) {
        if (value) {
          return;
        }
      }
      alert("예약이 완료되었습니다.");
    },
    [info, dispatch, info_errors]
  );

  return [info, onChange, info_errors, onSubmit];
}

export default useInputs;
