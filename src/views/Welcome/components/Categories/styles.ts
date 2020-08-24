import styled from 'styled-components/macro';

export const CategoriesContainer = styled.div`
  margin: 4rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6.25vw;
  justify-content: space-between;

  // 700px
  @media screen and (min-width: 43.75rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  // 1024px
  @media screen and (min-width: 64rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
