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
//  프레젠테이셔널 컴포넌트. 스타일 정보를 가지며 부모로부터 받은 props로 렌더링
// 상세 핸드폰 정보 컴포넌트
const ContactInfo = React.memo(
  ({ username, phoneNumber, onChange, errors, target }) => {
    const userNameRef = useRef();
    const phoneNumberRef = useRef();
    console.log("contact info");
    // 가장 처음 focus가 걸리는 부분이 target이고 해당 부분으로 포커스가 잡힌다
    useEffect(() => {
      // const [, target] = focus;
      if (target === "username") {
        userNameRef.current.focus();
      } else if (target === "phoneNumber") {
        phoneNumberRef.current.focus();
      }
    }, [target]);
    return (
      <ContactWrapper>
        <header>상세 핸드폰 정보</header>
        <Name>
          <header>사용자 이름</header>
          <Input
            type="text"
            placeholder="홍길동"
            name="username"
            onChange={onChange}
            value={username || ""}
            alert={errors.username}
            ref={userNameRef}
          />
          {errors.username && <Alert>{errors.username}</Alert>}
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
                value={phoneNumber || ""}
                onChange={onChange}
                alert={errors.phoneNumber}
                ref={phoneNumberRef}
              />
              {errors.phoneNumber && <Alert>{errors.phoneNumber}</Alert>}
            </div>
          </FlexContainer>
        </PhoneNumber>
      </ContactWrapper>
    );
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default ContactInfo;
