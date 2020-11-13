import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Alert } from "components/SharedComponents";

const OtherInfoWrapper = styled.section`
  width: 100%;
  padding: 20px;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 15px;
    padding-left: 2px;
  }

  border-bottom: 10px solid ${(props) => props.theme.color.lightGray};
`;

const Textarea = styled.textarea`
  padding: 10px;
  height: 100px;
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.alert ? props.theme.color.carrot : props.theme.color.lightGray};
  border-radius: 5px;
  resize: none;
`;

const Transportation = styled.div`
  width: 100%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }
`;

const OtherInfo = React.memo(({ values, onChange, errors, focus }) => {
  const otherInfoRef = useRef();
  useEffect(() => {
    console.log(focus);
    const [, target] = focus;
    if (target === "otherInfo") {
      otherInfoRef.current.focus();
    }
  }, [focus]);
  return (
    <OtherInfoWrapper>
      <header>기타 예약 정보</header>
      <Transportation>
        <header>오시는 교통 수단을 적어주세요.</header>
        <Textarea
          placeholder="답변을 인력해 주세요."
          value={values[0].otherInfo || ""}
          name="otherInfo"
          onChange={(e) => onChange(0, e)}
          alert={errors[0].otherInfo}
          ref={otherInfoRef}
        ></Textarea>
        {errors[0].otherInfo && <Alert>{errors[0].otherInfo}</Alert>}
      </Transportation>
    </OtherInfoWrapper>
  );
});

export default OtherInfo;
