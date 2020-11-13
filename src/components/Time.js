import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Alert } from "components/SharedComponents";

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
`;
const Select = styled.select`
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.alert ? props.theme.color.carrot : props.theme.color.lightGray};
  border-radius: 5px;
  height: 30px;
  padding: 0 7px;
  color: gray;
  &:hover {
    cursor: pointer;
  }
`;

const SelectGroup = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;
// 시간 정보 컴포넌트
const Time = React.memo(({ values, errors, onChange, focus }) => {
  const hourRef = useRef();
  const minuteRef = useRef();
  // 유효성 검사를 통과하지 못한 부분으로 이동한다
  useEffect(() => {
    const [, target] = focus;

    if (target === "hour") {
      hourRef.current.scrollIntoView();
    } else if (target === "minute") {
      minuteRef.current.scrollIntoView();
    }
  }, [focus]);
  return (
    <TimeWrapper>
      <header>숙소 도착 예정 시간</header>
      <FlexWrapper>
        <SelectGroup>
          <Select
            name="hour"
            id="hour"
            value={values[0].hour || "시"}
            onChange={(e) => onChange(0, e)}
            alert={errors[0].hour}
            ref={hourRef}
          >
            <option value="시" disabled>
              시
            </option>
            {Array(24)
              .fill(0)
              .map((item, idx) => (
                <option key={`hour-${idx}`} value={idx}>{`${idx}시`}</option>
              ))}
          </Select>
          {errors[0].hour && <Alert>{errors[0].hour}</Alert>}
        </SelectGroup>
        <SelectGroup>
          <Select
            name="minute"
            id="minute"
            value={values[0].minute || "분"}
            onChange={(e) => onChange(0, e)}
            alert={errors[0].minute}
            ref={minuteRef}
          >
            <option value="분" disabled>
              분
            </option>
            {Array(60)
              .fill(0)
              .map((item, idx) => (
                <option key={`minute-${idx}`} value={idx}>{`${idx}분`}</option>
              ))}
          </Select>
          {errors[0].minute && <Alert>{errors[0].minute}</Alert>}
        </SelectGroup>
      </FlexWrapper>
    </TimeWrapper>
  );
});

export default Time;
