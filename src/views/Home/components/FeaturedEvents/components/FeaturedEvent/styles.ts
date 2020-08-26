import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FeaturedEventContainer = styled.article`
  margin: 0 auto;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Banner = styled.img`
  display: block;
  width: 100%;
  border-radius: 0.625rem 0.625rem 0 0;

  // TODO: replace with box-shadow for performance
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.075));

  // Disable image dragging
  -webkit-user-drag: none;

  @media screen and (min-width: 992px) {
    border-radius: 0.625rem 0 0 0.625rem;
    object-fit: cover;
    height: 100%;
  }
`;

export const Information = styled.div`
  padding: 1.5rem;
  border-radius: 0 0 0.625rem 0.625rem;
  background-color: #fff;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.075));

  @media screen and (min-width: 992px) {
    border-radius: 0 0.625rem 0.625rem 0;
    height: 100%;
  }
`;

export const InformationHeading = styled.h3`
  margin-bottom: 0.75rem;
`;

export const Summary = styled.p`
  margin-bottom: 0;
`;
