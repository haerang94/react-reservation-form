import React from "react";
import styled from "styled-components";

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

const Transportation = styled.div`
  width: 100%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }

  & textarea {
    padding: 10px;
    height: 100px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
    resize: none;
  }
`;

const OtherInfo = () => {
  return (
    <OtherInfoWrapper>
      <header>기타 예약 정보</header>
      <Transportation>
        <header>오시는 교통 수단을 적어주세요.</header>
        <textarea placeholder="답변을 인력해 주세요."></textarea>
      </Transportation>
    </OtherInfoWrapper>
  );
};

export default OtherInfo;
