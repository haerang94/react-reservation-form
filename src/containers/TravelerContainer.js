import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";

const TravelerContainer = () => {
  const [values, onChange, reset, errors] = useInputs();

  return (
    <div>
      <Traveler
        values={values}
        onChange={onChange}
        reset={reset}
        errors={errors}
        idx={1}
      />
    </div>
  );
};

export default TravelerContainer;
