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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Mont;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    scroll-behavior: smooth;
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
