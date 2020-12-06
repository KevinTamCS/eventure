import styled from 'styled-components/macro';

export const UserMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;
  outline: none;

  transition: 0.2s;
  transition-timing-function: ease-in-out;

  &:focus {
    outline: none;
  }

  &&&&&&&&:hover {
    svg {
      stroke: #000;
    }
  }
`;

export const Image = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  -webkit-user-drag: none;
`;

export const DropdownIconSvg = styled.svg`
  stroke: #c4c4c4;
`;
