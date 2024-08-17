import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import lightTheme from "./styles/themes/lightTheme.ts";
import darkTheme from "./styles/themes/darkTheme.ts";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";
import Home from "./pages/Home/Home.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import Favorites from "./pages/Favorites/Favorites.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Item from "./pages/Item/Item.tsx";
import { useAppDispatch } from "./context/hooks.ts";
import { checkAuthenticationThunkerAction } from "./context/userSlice/userThunks.ts";

function App(): React.ReactNode {
  const [theme] = useState("light");
  const dispatchRedux = useAppDispatch();

  useEffect(() => {
    dispatchRedux(checkAuthenticationThunkerAction());
  }, [])

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
        <SideBar />
        <Header />
        
        <main>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<Catalog />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/item/:idItem" element={<Item />}/>
          </Routes>
        </main>
        
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
