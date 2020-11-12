import React from "react";
import styled from "styled-components";

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

  & input[type="text"] {
    width: 60%;
    padding: 10px;
    height: 30px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
  }
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
`;

const PhoneNumber = styled.div`
  width: 100%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }

  & input {
    padding: 10px;
    height: 30px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
  }
`;

const Name = styled(PhoneNumber)`
  width: 100%;
`;

const ContactInfo = () => {
  return (
    <ContactWrapper>
      <header>상세 핸드폰 정보</header>
      <Name>
        <header>사용자 이름</header>
        <input type="text" placeholder="홍길동" />
      </Name>
      <PhoneNumber>
        <header>핸드폰 번호</header>
        <FlexContainer>
          <select name="hour" id="hour">
            <option value="82">+82(대한민국)</option>
          </select>
          <input type="text" placeholder="'-'없이 입력해 주세요." />
        </FlexContainer>
      </PhoneNumber>
    </ContactWrapper>
  );
};

export default ContactInfo;
