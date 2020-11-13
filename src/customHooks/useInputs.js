import { useCallback, useState } from "react";
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

      for (const value of Object.values(newErrors)) {
        for (const v of Object.values(value)) {
          if (v) {
            return;
          }
        }
      }
      alert("예약이 완료되었습니다.");
    },
    [info, dispatch, info_errors]
  );

  return [info, onChange, info_errors, onSubmit];
}

export default useInputs;
