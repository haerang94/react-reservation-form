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
<<<<<<< Updated upstream
    padding: 0.1em;
=======
>>>>>>> Stashed changes
  }

  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"] + label:before {
    content: "\\2714";
    border: 0.1em solid mediumseagreen;
    border-radius: 0.2em;
    display: inline-block;
<<<<<<< Updated upstream
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
=======
    width: ${(props) => props.theme.size.mmd};
    height: ${(props) => props.theme.size.mmd};
    margin-right: 1em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.1s;
    font-size: ${(props) => props.theme.size.mmd};
  }

  & input[type="checkbox"] + label:active:before {
    transform: scale(0);
>>>>>>> Stashed changes
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
  background: ${(props) => props.theme.color.blue};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Terms = ({ values, onClick, checked }) => {
  return (
    <TermsWrapper>
      <header>약관 동의</header>

      <input
        type="checkbox"
        name="allTerms"
        id="allTerms"
        value={values.allTerms || ""}
        onClick={onClick}
      />
      <label htmlFor="allTerms">전체 약관 동의</label>

      <div>
        <input
          type="checkbox"
          name="travelerTerm"
          id="travelerTerm"
          value={values.travelerTerm || ""}
          onClick={onClick}
        />
        <label htmlFor="travelerTerm">여행자 약관 동의 (필수)</label>
        <input
          type="checkbox"
          name="bargainTerm"
          id="bargainTerm"
          value={values.bargainTerm}
          onClick={onClick}
        />
        <label htmlFor="bargainTerm">
          특가 항공권 및 할인 혜택 안내 동의 (선택)
        </label>
      </div>
      <SubmitBtn>결제하기</SubmitBtn>
    </TermsWrapper>
  );
};

export default Terms;
