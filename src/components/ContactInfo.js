import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.section`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 8px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PhoneNumber = styled.div`
  width: 49%;
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
    </ContactWrapper>
  );
};

export default ContactInfo;
