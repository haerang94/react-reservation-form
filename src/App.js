import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "styles/theme";
import Reservation from "pages/Reservation";
import { InfoProvider } from "context/infoContext";

// styled components reset style, 폰트, global style 적용
const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        outline:none;
      @font-face {
    font-family: 'paybooc-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
     font-family: 'paybooc-Bold',sans-serif;
      font-size:12px;
    }
    body{
        padding:30px;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        
        background:#fff;
        font-family: 'paybooc-Bold',sans-serif;
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
    <InfoProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reservation />
      </ThemeProvider>
    </InfoProvider>
  );
};

export default App;
