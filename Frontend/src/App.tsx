import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import lightTheme from "./styles/themes/lightTheme.ts";
import darkTheme from "./styles/themes/darkTheme.ts";
import Header from "./components/Header/Header.tsx";

function App(): React.ReactNode {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
        <Header />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
