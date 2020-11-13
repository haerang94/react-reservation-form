import React from "react";
import TravelerList from "components/TravelerList";
import useInputs from "customHooks/useInputs";
const TravelerContainer = () => {
  const [values, onChange, errors] = useInputs();

  return (
    <div>
      <TravelerList
        values={values}
        onChange={onChange}
        errors={errors}
        cnt={values.length}
      ></TravelerList>
    </div>
  );
};

export default TravelerContainer;
