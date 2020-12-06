import styled from 'styled-components/macro';

export const EventCategorySection = styled.section`
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (min-width: 1200px) {
    padding: 1.5rem 2.5rem 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1185px;
  }
`;

export const Heading = styled.h2`
  padding: 0 6.25vw;

  @media screen and (min-width: 992px) {
    padding-left: 2.75rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 1rem;
  }
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 6.25vw;

  overflow-x: auto;
  overflow-y: hidden;

  // Hide scrollbars
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 2.75rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem;
  }
`;
