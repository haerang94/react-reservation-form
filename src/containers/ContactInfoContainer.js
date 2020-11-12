import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";

const ContactInfoContainer = () => {
  const [values, onChange, reset, errors] = useInputs();

  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      reset={reset}
      errors={errors}
    ></ContactInfo>
  );
};

export default ContactInfoContainer;
