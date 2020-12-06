import styled, { createGlobalStyle } from 'styled-components/macro';
import Container from 'react-bootstrap/Container';

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
  
    @media screen and (min-width: 768px) {
      h1 {
        font-size: 3rem;
      }
  
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;

// Page Headings
export const Heading = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 0 6.25vw;

  @media screen and (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

// Page Containers
export const PageContainer = styled(Container)`
  padding: 2rem 0;
`;

export default GlobalStyle;
