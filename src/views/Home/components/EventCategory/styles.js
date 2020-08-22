import styled from 'styled-components/macro';

export const EventCategoryContainer = styled.section`
  margin: 0 auto;
  // 1366px
  @media screen and (min-width: 85.375rem) {
    max-width: 76.875rem;
  }
`;

export const Heading = styled.h2`
  padding: 0 6.25vw;

  // 1024px
  @media screen and (min-width: 64rem) {
    padding: 0 5vw;
  }
  // 1366px
  @media screen and (min-width: 85.375rem) {
    padding: 0;
  }
`;

export const EventsContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  // Hide scrollbars
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Events = styled.div`
  padding: 1rem 6.25vw 3rem;
  display: flex;

  // 1024px
  @media screen and (min-width: 64rem) {
    padding: 1rem 5vw 3rem;
  }

  // 1366px
  @media screen and (min-width: 85.375rem) {
    padding: 1rem 0 3rem;
  }
`;
