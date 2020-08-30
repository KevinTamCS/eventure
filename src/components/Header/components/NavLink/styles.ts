import styled from 'styled-components/macro';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

export const StyledLinkContainer = styled(LinkContainer)`
  margin-right: 1.5rem;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
`;

export const StyledNavLink = styled(Nav.Link)`
  &&& {
    color: #000;
  }

  &&&:focus {
    color: #787878;
  }

  &&&:active {
    color: #969696;
  }
`;