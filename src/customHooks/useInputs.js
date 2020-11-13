import { useCallback } from "react";
import { valid } from "utils/validation";
import { setInfo, setInfoErrors, setFocus } from "modules/info";
import { useSelector, useDispatch } from "react-redux";

function useInputs() {
  const { info, info_errors, focus } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
    focus: state.info.focus,
  }));

  const dispatch = useDispatch();

  const onChange = useCallback(
    (idx, e) => {
      e.persist();
      let { name, value } = e.target;
      if (name.slice(0, 6) === "gender") {
        name = "gender";
      }
      const newInfo = [...info];
      newInfo[idx] = { ...info[idx], [name]: value };
      const newErrors = [...info_errors];

      const temp = valid(newInfo[idx], name, info_errors[idx], idx);
      newErrors[idx] = temp;
      dispatch(setInfo(newInfo));
      dispatch(setInfoErrors(newErrors));
    },
    [info, dispatch, info_errors]
  );

  const onSubmit = useCallback(
    (e) => {
      e.persist();
      const newErrors = [...info_errors];
      for (let i = 0; i < info.length; i++) {
        const temp = valid(info[i], null, info_errors[i], i);
        newErrors[i] = temp;
      }

      dispatch(setInfoErrors(newErrors));

      for (const [key, value] of Object.entries(newErrors)) {
        for (const [k, v] of Object.entries(value)) {
          if (v) {
            console.log(key, k);
            dispatch(setFocus([key, k]));

            return;
          }
        }
      }
      alert("예약이 완료되었습니다.");
    },
    [info, dispatch, info_errors]
  );

  return [info, onChange, info_errors, onSubmit, focus];
}

export default useInputs;
