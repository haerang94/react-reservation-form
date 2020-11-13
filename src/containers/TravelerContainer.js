import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const TravelerContainer = () => {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const [values, onChange, errors] = useInputs(info, info_errors);

  console.log(values, errors, info_errors);

  return (
    <div>
      <Traveler values={values} onChange={onChange} errors={errors} idx={1} />
    </div>
  );
};

export default TravelerContainer;
