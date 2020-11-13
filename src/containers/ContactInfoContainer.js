import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const ContactInfoContainer = () => {
  const { info } = useSelector((state) => ({
    info: state.info.info,
  }));
  const [values, onChange, errors] = useInputs(info);

  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      errors={errors}
    ></ContactInfo>
  );
};

export default ContactInfoContainer;
