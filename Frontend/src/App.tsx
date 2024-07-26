import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import lightTheme from "./styles/themes/lightTheme.ts";
import darkTheme from "./styles/themes/darkTheme.ts";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import ProductCard from "./components/ProductCard/ProductCard.tsx";

function App(): React.ReactNode {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
      <Header />
        <ProductCard name="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)" img="img/accessories/apple-watch-series-3/space-gray/00.webp" fullPrice={799} discountPrice={899} info={{ "screen": "1.3' OLED",
    "resolution": "272x340", "ram": "768MB"}}/>
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
