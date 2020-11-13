import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const TravelerContainer = () => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  const [values, onChange, errors] = useInputs(info);

  console.log(values);

  return (
    <div>
      <Traveler values={values} onChange={onChange} errors={errors} idx={1} />
    </div>
  );
};

export default TravelerContainer;
