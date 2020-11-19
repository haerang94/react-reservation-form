import React, { useCallback, useMemo } from "react";
import Traveler from "components/Traveler";

const Child = React.memo(({ values, onChange, errors, cnt, focus, idx }) => {
  const newValue = useMemo(() => values, [values]);
  const handleChange = useCallback(
    (idx, e) => {
      onChange(idx, e);
    },
    [onChange]
  );

  return (
    <Traveler
      values={newValue}
      onChange={handleChange}
      errors={errors}
      cnt={cnt}
      focus={focus}
      idx={idx}
    ></Traveler>
  );
});

// 총 여행자의 수만큼 traveler 컴포넌트를 가진다
// cnt는 전역 상태의 info배열의 크기
const TraverlerList = React.memo(({ values, errors, onChange, cnt, focus }) => {
  return (
    <>
      {Array(cnt)
        .fill(0)
        .map((item, idx) => (
          <Child
            key={`traveler-${idx}`}
            values={values}
            errors={errors}
            onChange={onChange}
            idx={idx}
            focus={focus}
          />
        ))}
    </>
  );
});

export default TraverlerList;
