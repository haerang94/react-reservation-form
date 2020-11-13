import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Alert, Input } from "components/SharedComponents";

const ContactWrapper = styled.section`
  width: 100%;
  padding: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 15px;
  }
  & > * {
    margin-bottom: 15px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & select {
    width: 38%;
    padding-left: 7px;
    height: 30px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
  }
  & select:hover {
    cursor: pointer;
  }

  & > div {
    width: 60%;
  }
`;

const PhoneNumber = styled.div`
  width: 100%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }
`;

const Name = styled(PhoneNumber)`
  width: 100%;
`;

const ContactInfo = ({ values, onChange, errors, focus }) => {
  const userNameRef = useRef();
  const phoneNumberRef = useRef();
  useEffect(() => {
    console.log(focus);
    const [, target] = focus;

    if (target === "username") {
      userNameRef.current.focus();
    } else if (target === "phoneNumber") {
      phoneNumberRef.current.focus();
    }
  }, [focus]);
  return (
    <ContactWrapper>
      <header>상세 핸드폰 정보</header>
      <Name>
        <header>사용자 이름</header>
        <Input
          type="text"
          placeholder="홍길동"
          name="username"
          onChange={(e) => onChange(0, e)}
          value={values[0].username || ""}
          alert={errors[0].username}
          ref={userNameRef}
        />
        {errors[0].username && <Alert>{errors[0].username}</Alert>}
      </Name>
      <PhoneNumber>
        <header>핸드폰 번호</header>
        <FlexContainer>
          <select name="hour" id="hour" defatulvalue={"82"}>
            <option value="82">+82(대한민국)</option>
          </select>
          <div>
            <Input
              type="text"
              placeholder="'-'없이 입력해 주세요."
              name="phoneNumber"
              value={values[0].phoneNumber || ""}
              onChange={(e) => onChange(0, e)}
              alert={errors[0].phoneNumber}
              ref={phoneNumberRef}
            />
            {errors[0].phoneNumber && <Alert>{errors[0].phoneNumber}</Alert>}
          </div>
        </FlexContainer>
      </PhoneNumber>
    </ContactWrapper>
  );
};

export default ContactInfo;
