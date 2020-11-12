import React from "react";
import styled from "styled-components";

const TimeWrapper = styled.section`
  width: 100%;
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 5px;
    padding-left: 2px;
  }
`;

const Time = () => {
  return (
    <TimeWrapper>
      <header>숙소 도착 예정 시간</header>
    </TimeWrapper>
  );
};

export default Time;
