import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import Reservation from "pages/Reservation";
import { InfoProvider } from "context/infoContext";

// styled components reset style, 폰트, global style 적용

const App = React.memo(() => {
  return (
    <InfoProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reservation />
      </ThemeProvider>
    </InfoProvider>
  );
});

export default App;
