import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { StyledNavLink } from './styles';

interface Props {
  to: string;
  className?: string;
  children?: any;
}

// Bootstrap Nav.Link wrapped around a LinkContainer for React Router.
const NavLink: React.FC<Props> = ({ to, className, children }) => {
  return (
    <StyledNavLink to={to} className={className}>
      <Nav.Link>{children}</Nav.Link>
    </StyledNavLink>
  );
};

export default NavLink;
