import styled from 'styled-components/macro';

export const LandingContainer = styled.section`
  margin: 0 auto;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;

  // 1024px
  @media screen and (min-width: 64rem) {
    padding: 2rem 0 6rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  // 768px
  @media screen and (min-width: 768px) {
    width: 70%;
  }

  // 1024px
  @media screen and (min-width: 992px) {
    align-self: center;
    width: 50%;
  }

  // 1366px
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-top: 0;
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
    width: 40%;

    // 1366px
    @media screen and (min-width: 85.375rem) {
      width: 25rem;
    }
  }
`;
