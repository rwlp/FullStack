import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: 'Mont';
    font-weight: 800;
    src: url('/fonts/Mont-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Mont';
    font-weight: 700;
    src: url('/fonts/Mont-SemiBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Mont';
    font-weight: 600;
    src: url('/fonts/Mont-Regular.otf') format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: Mont;
    background-color: ${({ theme }) => theme.primary};
    scroll-behavior: smooth;
  }

  #root {
    padding-inline: 30px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    font-family: Mont;
    background-color: transparent;
  }

  a {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
