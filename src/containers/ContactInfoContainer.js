import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";

const ContactInfoContainer = () => {
  const [values, onChange, errors, , focus] = useInputs();

  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></ContactInfo>
  );
};

export default ContactInfoContainer;
