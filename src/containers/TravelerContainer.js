import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";
const TravelerContainer = () => {
  const [values, onChange, errors] = useInputs();

  console.log(values, errors);

  return (
    <div>
      <Traveler values={values} onChange={onChange} errors={errors} idx={1} />
    </div>
  );
};

export default TravelerContainer;
