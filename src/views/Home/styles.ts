import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';

export const HomeContainer = styled(Container)`
  // 1024px
  @media screen and (min-width: 992px) {
    //padding-top: 4rem;
  }
`;

export const TopContainer = styled(Container)`
  padding: 6.25vw;

  @media screen and (min-width: 768px) {
    padding: 2rem 3vw;
  }

  @media screen and (min-width: 992px) {
    padding: 2rem 1vw;
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 2vw;
  }
`;

export const EventCategoryContainer = styled(Container)``;
