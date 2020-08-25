import styled from 'styled-components/macro';

export const FeaturedEventsContainer = styled.section`
  padding: 1rem 0;
`;

export const Heading = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;

  // 700px
  @media screen and (min-width: 43.75rem) {
    margin-bottom: 2rem;
  }
`;
