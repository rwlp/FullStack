import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import lightTheme from "./styles/themes/lightTheme.ts";
import darkTheme from "./styles/themes/darkTheme.ts";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";

function App(): React.ReactNode {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
        <Header />
        
        <main>  
        <Routes>
          <Route path="/" element={<Catalog />} />
        </Routes>
        </main>
        
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
