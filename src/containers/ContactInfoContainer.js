import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";

const ContactInfoContainer = () => {
  const [values, onChange, errors] = useInputs();

  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      errors={errors}
    ></ContactInfo>
  );
};

export default ContactInfoContainer;
