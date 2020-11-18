import React from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";

// 컨테이너 컴포넌트
// 스타일 정보는 없으며 데이터를 받아와서 프레젠테이셔널 컴포넌트에 전달하는 역할
const ContactInfoContainer = React.memo(() => {
  // 전역 상태를 useInputs라는 커스텀 훅을 통해서 사용한다
  const [values, onChange, errors, , focus] = useInputs();
  console.log("contactInfo container");
  return (
    <ContactInfo
      values={values}
      onChange={onChange}
      errors={errors}
      focus={focus}
    ></ContactInfo>
  );
});

export default ContactInfoContainer;
