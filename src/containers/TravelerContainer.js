import React from "react";
import TravelerList from "components/TravelerList";
import useInputs from "customHooks/useInputs";
const TravelerContainer = React.memo(() => {
  const [values, onChange, errors, , focus] = useInputs();

  return (
    <div>
      <TravelerList
        values={values}
        onChange={onChange}
        errors={errors}
        cnt={1}
        focus={focus}
      ></TravelerList>
    </div>
  );
});

export default TravelerContainer;
