import styled from 'styled-components/macro';

export const WelcomeContainer = styled.div`
  margin: 0 auto;
  padding: 2rem 6.25vw;

  // 1366px
  @media screen and (min-width: 85.375rem) {
    max-width: 76.875rem;
    padding: 4rem 0;
  }
`;

export const Introduction = styled.div`
  margin-bottom: 2rem;

  // 700px
  @media screen and (min-width: 43.75rem) {
    .Welcome-introduction {
      margin-bottom: 4rem;
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;

  // 700px
  @media screen and (min-width: 43.75rem) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  text-align: center;

  // 700px
  @media screen and (min-width: 43.75rem) {
    font-size: 1.75rem;
  }
`;
