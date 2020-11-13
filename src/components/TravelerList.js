import React from "react";
import Traveler from "components/Traveler";

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
