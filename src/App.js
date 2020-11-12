import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "styles/theme";
import Reservation from "pages/Reservation";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        outline:none;

    }
    body{
        font-size:14px;
        height:100%;
        background:#fff;
        
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
 
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reservation />
    </ThemeProvider>
  );
};

export default App;
