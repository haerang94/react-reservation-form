import React from "react";
import styled from "styled-components";
import { Alert, Input } from "components/SharedComponents";

const TraverlerWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
  & > * {
    margin-bottom: 15px;
  }
`;

const TravelerNumber = styled.header`
  font-size: ${(props) => props.theme.size.md};
  display: flex;
  font-weight: bold;
  margin-bottom: 8px;
  & div:nth-child(2) {
    color: ${(props) => props.theme.color.blue};
  }
`;

const Notice = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: ${(props) => props.theme.color.gray};
  padding-left: 2px;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TwoInputs = styled.div`
  width: 49%;

  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.mmd};
    margin-bottom: 8px;
    padding-left: 2px;
  }
`;

const OneInput = styled(TwoInputs)`
  width: 100%;
`;

const Label = styled.label`
  width: 50%;
  font-size: ${(props) => props.theme.size.mmd};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid
    ${(props) =>
      props.alert ? props.theme.color.carrot : props.theme.color.lightGray};
  border-radius: 5px;
  height: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  & input[type="radio"] {
    display: none;
  }

  & label:nth-child(4) {
    border-radius: 0 5px 5px 0;
  }
  & label:nth-child(2) {
    border-radius: 5px 0 0 5px;
  }
  & input[type="radio"] + label:hover {
    cursor: pointer;
  }
  & input[type="radio"]:checked + ${Label} {
    border: 1px solid ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.blue};
    background: ${(props) =>
      props.alert ? props.theme.color.carrot : props.theme.color.lightBlue};
    & span {
      font-weight: bold;
    }
  }
`;

const Traveler = React.memo(({ values, errors, onChange, idx }) => {
  return (
    <TraverlerWrapper>
      <TravelerNumber>
        <div>여행자</div>
        <div>{idx + 1}</div>
      </TravelerNumber>
      <Notice>
        예약하시는 모든 분의 정보를 여권 상과 동일하게 기입해 주시게 바랍니다.
      </Notice>
      <FlexContainer>
        <TwoInputs>
          <header>영문 이름</header>
          <Input
            type="text"
            placeholder="Gil Dong"
            name="firstName"
            value={values[idx].firstName || ""}
            onChange={(e) => onChange(idx, e)}
            alert={errors[idx].firstName}
          />
          {errors[idx].firstName && <Alert>{errors[idx].firstName}</Alert>}
        </TwoInputs>
        <TwoInputs>
          <header>영문 성</header>
          <Input
            type="text"
            placeholder="Hong"
            name="lastName"
            value={values[idx].lastName || ""}
            onChange={(e) => onChange(idx, e)}
            alert={errors[idx].lastName}
          />
          {errors[idx].lastName && <Alert>{errors[idx].lastName}</Alert>}
        </TwoInputs>
      </FlexContainer>
      <OneInput>
        <header>한글 이름</header>
        <Input
          type="text"
          placeholder="홍길동"
          name="koreanName"
          value={values[idx].koreanName || ""}
          onChange={(e) => onChange(idx, e)}
          alert={errors[idx].koreanName}
        />
        {errors[idx].koreanName && <Alert>{errors[idx].koreanName}</Alert>}
      </OneInput>
      <OneInput>
        <header>성별</header>
        <ButtonContainer>
          <input
            type="radio"
            name={`gender-${idx}`}
            id={`male-${idx}`}
            value={"남"}
            onChange={(e) => onChange(idx, e)}
            alert={errors[idx].gender}
          />
          <Label htmlFor={`male-${idx}`} alert={errors[idx].gender}>
            남
          </Label>
          <input
            type="radio"
            name={`gender-${idx}`}
            id={`female-${idx}`}
            value={"여"}
            onChange={(e) => onChange(idx, e)}
            alert={errors[idx].gender}
          />
          <Label htmlFor={`female-${idx}`} alert={errors[idx].gender}>
            여
          </Label>
        </ButtonContainer>
        {errors[idx].gender && <Alert>{errors[idx].gender}</Alert>}
      </OneInput>
      <OneInput>
        <header>생년월일</header>
        <Input
          type="text"
          placeholder="YYMMDD"
          value={values[idx].birthdate || ""}
          onChange={(e) => onChange(idx, e)}
          name="birthdate"
          alert={errors[idx].birthdate}
        />
        {errors[idx].birthdate && <Alert>{errors[idx].birthdate}</Alert>}
      </OneInput>
    </TraverlerWrapper>
  );
});

export default Traveler;
