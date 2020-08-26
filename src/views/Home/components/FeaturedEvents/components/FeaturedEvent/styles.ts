import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FeaturedEventArticle = styled.article`
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1050px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

export const Banner = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 0.625rem 0.625rem 0 0;
  // TODO: replace with box-shadow for performance
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.075));

  // Disable image dragging
  -webkit-user-drag: none;

  @media screen and (min-width: 992px) {
    height: 100%;
    border-radius: 0.625rem 0 0 0.625rem;
  }
`;

export const Information = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0 0 0.625rem 0.625rem;
  // TODO: replace with box-shadow for performance
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.075));

  @media screen and (min-width: 992px) {
    height: 100%;
    border-radius: 0 0.625rem 0.625rem 0;
  }
`;

export const InformationHeading = styled.h3`
  margin-bottom: 0.75rem;
`;

export const Summary = styled.p`
  margin-bottom: 0;
`;
