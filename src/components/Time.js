import React from "react";
import styled from "styled-components";

const TimeWrapper = styled.section`
  width: 100%;
  padding: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 8px;
    padding-left: 2px;
  }
  & > * {
    margin-bottom: 15px;
  }
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & select {
    width: 49%;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
    height: 30px;
    padding: 0 7px;
    color: gray;
  }
  & select:hover {
    cursor: pointer;
  }
`;

const Time = () => {
  return (
    <TimeWrapper>
      <header>숙소 도착 예정 시간</header>
      <FlexWrapper>
        <select name="hour" id="hour">
          <option value="none">시</option>
          {Array(24)
            .fill(0)
            .map((item, idx) => (
              <option key={`hour-${idx}`} value={idx}>{`${idx}시`}</option>
            ))}
        </select>
        <select name="minute" id="minute">
          <option value="none">분</option>
          {Array(7)
            .fill(0)
            .map((item, idx) => (
              <option key={`minute-${idx}`} value={idx * 10}>{`${
                idx * 10
              }분`}</option>
            ))}
        </select>
      </FlexWrapper>
    </TimeWrapper>
  );
};

export default Time;
