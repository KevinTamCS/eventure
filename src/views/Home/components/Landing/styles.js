import styled from 'styled-components/macro';

export const LandingContainer = styled.section`
  margin: 0 auto;
  padding: 0 6.25vw 4rem;
  display: flex;
  flex-direction: column;

  // 1024px
  @media screen and (min-width: 64rem) {
    padding: 0 6.25vw 6rem;
    flex-direction: row;
    justify-content: space-between;
  }

  // 1366px
  @media screen and (min-width: 85.375rem) {
    padding: 0 0 6rem;
    max-width: 76.875rem;
  }
`;

export const Content = styled.div`
  align-self: center;
  width: 40%;
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const Art = styled.img`
  display: none;

  // 1024px
  @media screen and (min-width: 64rem) {
    display: block;
    width: 25rem;
  }
`;
