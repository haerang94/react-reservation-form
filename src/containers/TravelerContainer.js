import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";

const TravelerContainer = () => {
  const [values, onChange, errors, onSubmit, errors2] = useInputs();
  console.log(errors, errors2);
  return (
    <div>
      <Traveler values={values} onChange={onChange} errors={errors} idx={1} />
    </div>
  );
};

export default TravelerContainer;
