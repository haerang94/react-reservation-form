import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";
import { useSelector } from "react-redux";
const ContactInfoContainer = () => {
  const { info, info_errors } = useSelector((state) => ({
    info: state.info.info,
    info_errors: state.info.info_errors,
  }));
  const [values, onChange, errors] = useInputs(info, info_errors);

  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      errors={errors}
    ></ContactInfo>
  );
};

export default ContactInfoContainer;
