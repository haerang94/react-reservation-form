import React from "react";
import Traveler from "components/Traveler";

// 총 여행자의 수만큼 traveler 컴포넌트를 가진다
// cnt는 전역 상태의 info배열의 크기
const TraverlerList = React.memo(({ values, errors, onChange, cnt, focus }) => {
  return (
    <>
      {Array(cnt)
        .fill(0)
        .map((item, idx) => (
          <Traveler
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
