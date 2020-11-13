import React from "react";
import styled from "styled-components";

const TermsWrapper = styled.section`
  width: 100%;
  padding: 20px;

  & header {
    font-weight: bold;
    font-size: ${(props) => props.theme.size.md};
    margin-bottom: 15px;
  }
  & > * {
    margin-bottom: 15px;
  }

  & input[type="checkbox"] + label {
    display: block;
    cursor: pointer;
    font-size: ${(props) => props.theme.size.mmd};
    padding: 0.1em;
  }

  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"] + label:before {
    content: "\\2714";
    border: 0.1em solid mediumseagreen;
    border-radius: 0.2em;
    display: inline-block;
    width: ${(props) => props.theme.size.smd};
    height: ${(props) => props.theme.size.smd};
    margin-right: 1em;
    vertical-align: center;
    color: transparent;
    transition: 0.1s;
    font-size: ${(props) => props.theme.size.mmd};
    padding: 0.1em;
  }

  & input[type="checkbox"] + label:active:before {
    transform: scale(0.5);
    border: 1px solid mediumseagreen;
  }

  & input[type="checkbox"]:checked + label:before {
    background-color: MediumSeaGreen;
    color: #fff;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 70px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    padding: 0 10px;
    border-radius: 5px;
  }
`;

const SubmitBtn = styled.button`
  height: 40px;
  width: 100%;
  background: ${(props) =>
    props.disabled ? props.theme.color.lightGray : props.theme.color.blue};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

const Terms = React.memo(({ values, onChange, onSubmit }) => {
  return (
    <TermsWrapper>
      <header>약관 동의</header>
      <input
        type="checkbox"
        name="allTerms"
        id="allTerms"
        value={values.allTerms || ""}
        onChange={onChange}
        checked={values.allTerms}
      />
      <label htmlFor="allTerms">전체 약관 동의</label>

      <div>
        <input
          type="checkbox"
          name="travelerTerm"
          id="travelerTerm"
          value={values.travelerTerm || ""}
          onChange={onChange}
          checked={values.travelerTerm}
        />
        <label htmlFor="travelerTerm">여행자 약관 동의 (필수)</label>
        <input
          type="checkbox"
          name="bargainTerm"
          id="bargainTerm"
          value={values.bargainTerm}
          onChange={onChange}
          checked={values.bargainTerm}
        />
        <label htmlFor="bargainTerm">
          특가 항공권 및 할인 혜택 안내 동의 (선택)
        </label>
      </div>
      <SubmitBtn onClick={onSubmit} disabled={!values.travelerTerm}>
        결제하기
      </SubmitBtn>
    </TermsWrapper>
  );
});

export default Terms;
