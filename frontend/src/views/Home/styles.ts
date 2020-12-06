import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';

export const StyledContainer = styled(Container)`
  padding: 0.5rem 6.25vw;
  
  @media screen and (min-width: 768px) {
    padding: 2rem 3vw;
  }
`;
