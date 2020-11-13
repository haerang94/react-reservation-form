import React from "react";
import Traveler from "components/Traveler";

const TraverlerList = ({ values, errors, onChange, cnt }) => {
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
          />
        ))}
    </>
  );
};

export default TraverlerList;
