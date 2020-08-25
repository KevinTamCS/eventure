import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
  
    h1 {
      font-weight: bold;
      font-size: 2.25rem;
    }
  
    h2 {
      font-weight: bold;
      font-size: 2rem;
    }
  
    h3 {
      font-size: 1.75rem;
    }
  
    // 700px
    @media screen and (min-width: 43.75rem) {
      h1 {
        font-size: 3rem;
      }
  
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default GlobalStyle;
