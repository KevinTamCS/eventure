import React from 'react';
import { NavLinkListItem, StyledLinkContainer, StyledNavLink } from './styles';

interface Props {
  to: string;
  onClick?: () => void;
  className?: string;
  children?: unknown;
}

// Bootstrap Nav.Link wrapped around a LinkContainer for React Router.
const NavLink: React.FC<Props> = (props) => {
  const { to, onClick, className, children } = props;

  return (
    <NavLinkListItem>
      <StyledLinkContainer to={to} className={className}>
        <StyledNavLink onClick={onClick}>{children}</StyledNavLink>
      </StyledLinkContainer>
    </NavLinkListItem>
  );
};

export default NavLink;
