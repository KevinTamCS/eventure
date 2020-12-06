import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const EventContainer = styled.article`
  padding-right: 1.5rem;

  &:last-child {
    padding-right: 6.25vw;
  }

  @media screen and (min-width: 992px) {
    &:last-child {
      padding-right: 2.75rem;
    }
  }

  @media screen and (min-width: 1200px) {
    &:last-child {
      padding-right: 1rem;
    }
  }
`;

export const Card = styled(Link)`
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

export const EventBanner = styled.img`
  width: 15.625rem;
  display: block;
  border-radius: 0.625rem 0.625rem 0 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.075);

  // Disable image dragging
  -webkit-user-drag: none;
`;

export const EventInformation = styled.div`
  height: 11rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 0 0.625rem 0.625rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.075);
`;

export const EventTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

export const EventOrganizer = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const EventStartTime = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0;
`;
