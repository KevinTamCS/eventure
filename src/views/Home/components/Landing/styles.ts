import styled from 'styled-components/macro';
import Col from 'react-bootstrap/Col';

export const LandingSection = styled.section`
  margin: 0 auto;
  padding: 2rem 6.25vw 4rem;

  @media screen and (min-width: 768px) {
    padding: 3vw 3vw 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 3rem 0 6rem;
  }
`;

export const ContentCol = styled(Col)`
  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 992px) {
    align-self: center;
    width: 50%;
  }

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

export const ArtCol = styled(Col)`
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Art = styled.img`
  width: 80%;

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;
