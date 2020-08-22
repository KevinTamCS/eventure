import styled from 'styled-components/macro';
import './Category.scss';

export const CategoryContainer = styled.article`
  // 1366px
  @media screen and (min-width: 85.375rem) {
    max-width: 76.875rem;
  }
`;

export const Card = styled.button`
  max-width: 40.625vw;
  border-radius: 0.625rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.075);
  transition: 0.2s;
  transition-timing-function: ease-in-out;

  display: block;
  font-size: 100%;
  font-family: inherit;
  padding: 0;
  background-color: unset;

  // Override default browser styles
  outline: none !important;
  border: none !important;

  &:hover {
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  // Disable image dragging
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  // Card style
  border-radius: 0.625rem 0.625rem 0 0;
`;

export const TitleContainer = styled.div`
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  // Card style
  height: 5rem;
  border-radius: 0 0 0.625rem 0.625rem;
  background-color: #fff;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 0;

  // 1366px
  @media screen and (min-width: 85.375rem) {
    font-size: 1.25rem;
  }
`;
