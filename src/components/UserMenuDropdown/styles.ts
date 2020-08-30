import styled from 'styled-components/macro';
import { Button } from '../Button';

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 3rem;
  margin-top: -0.25rem;

  padding: 1rem;

  width: 12.5rem;
  height: auto;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  @media screen and (min-width: 1200px) {
    right: calc((100vw - 1140px) / 2);
  }
`;

export const Name = styled.p`
  text-align: center;
`;

export const DropdownItems = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
`;

export const ButtonLinkListItem = styled.li`
  list-style: none;
`;

export const ButtonLink = styled(Button)`
  padding: 0.5rem;
  background: none;
  color: #000;
  font-size: 1.125rem;
  font-weight: normal;
  width: auto;
`;
