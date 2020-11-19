import React, { useCallback, useMemo } from "react";
import ContactInfo from "components/ContactInfo";
import useInputs from "customHooks/useInputs";

// 컨테이너 컴포넌트
// 스타일 정보는 없으며 데이터를 받아와서 프레젠테이셔널 컴포넌트에 전달하는 역할
const ContactInfoContainer = React.memo(() => {
  // 전역 상태를 useInputs라는 커스텀 훅을 통해서 사용한다
  const [values, onChange, errors, , focus] = useInputs();
  console.log("contactInfo container");
  const handleChange = useCallback(
    (e) => {
      onChange(0, e);
    },
    [onChange]
  );
  const newErrors = useMemo(
    () => ({
      username: errors[0].username,
      phoneNumber: errors[0].phoneNumber,
    }),
    [errors]
  );
  const username = useMemo(() => values[0].username, [values]);
  const phoneNumber = useMemo(() => values[0].phoneNumber, [values]);

  const target = focus[1];
  return (
    <ContactInfo
      username={username}
      phoneNumber={phoneNumber}
      onChange={handleChange}
      errors={newErrors}
      target={target}
    ></ContactInfo>
  );
});

export default ContactInfoContainer;
