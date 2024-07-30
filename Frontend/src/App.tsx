import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import lightTheme from "./styles/themes/lightTheme.ts";
import darkTheme from "./styles/themes/darkTheme.ts";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";

const product =  {
  id: 3,
"codeName": "apple-watch-series-3-38mm-space-gray",
"category": "accessories",
"name": "Apple Watch Series 3 38mm Space Gray",
"capacityAvailable": ["38mm", "42mm"],
"capacity": "38mm",
"priceRegular": 199,
"priceDiscount": 169,
"colorsAvailable": ["space gray", "silver", "gold"],
"color": "space gray",
"images": [
"img/accessories/apple-watch-series-3/space-gray/00.webp",
"img/accessories/apple-watch-series-3/space-gray/01.webp",
"img/accessories/apple-watch-series-3/space-gray/02.webp"
],
"description": [
{
id: 0,
productId: 3,
language: 'en',
"title": "Monitor your health",
"text": [
"The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
]
},
{
id: 0,
productId: 3,
language: 'en',
"title": "Stay connected on the go",
"text": [
"With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
]
},
{
id: 0,
productId: 3,
language: 'en',
"title": "Stream your favorite music",
"text": [
"With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
]
}
],
"screen": "1.3' OLED",
"resolution": "272x340",
"processor": "Apple S3",
"ram": "768MB",
"cell": ["Wi-Fi", "Bluetooth", "LTE"],
"image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
"year": 2017
};

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
