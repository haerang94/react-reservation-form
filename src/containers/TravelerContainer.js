import React from "react";
import Traveler from "components/Traveler";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
import { setInfo } from "modules/info";

const TravelerContainer = () => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  console.log(info);
  const [values, onChange, errors] = useInputs(info);

  return (
    <div>
      <Traveler values={values} onChange={onChange} errors={errors} idx={1} />
    </div>
  );
};

export default TravelerContainer;
