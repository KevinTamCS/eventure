import React from 'react';
import { StyledLinkContainer, StyledNavLink } from './styles';

interface Props {
  to: string;
  className?: string;
  children?: unknown;
}

// Bootstrap Nav.Link wrapped around a LinkContainer for React Router.
const NavLink: React.FC<Props> = (props) => {
  const { to, className, children } = props;

  return (
    <StyledLinkContainer to={to} className={className}>
      <StyledNavLink>{children}</StyledNavLink>
    </StyledLinkContainer>
  );
};

export default NavLink;
