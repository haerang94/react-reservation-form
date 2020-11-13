import styled from "styled-components";

const Alert = styled.div`
  height: 20px;
  width: 100%;
  font-size: ${(props) => props.theme.size.sm};
  color: ${(props) => props.theme.color.carrot};
  margin-top: 5px;
  padding-left: 3px;
`;

const Input = styled.input`
  padding: 10px;
  height: 30px;
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.alert ? props.theme.color.carrot : props.theme.color.lightGray};
  border-radius: 5px;
`;

export { Alert, Input };
