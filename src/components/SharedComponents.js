import styled from "styled-components";

const Alert = styled.div`
  height: 20px;
  width: 100%;
  font-size: ${(props) => props.theme.size.sm};
  color: ${(props) => props.theme.color.carrot};
  margin-top: 5px;
  padding-left: 3px;
`;

export { Alert };
