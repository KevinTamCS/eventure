import React from 'react';
import styled from 'styled-components/macro';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import propTypes from 'prop-types';

const StyledNavLink = styled(LinkContainer)`
  margin-right: 1rem;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
`;

// Bootstrap Nav.Link wrapped around a LinkContainer for React Router.
const NavLink = (props) => {
  return (
    <StyledNavLink to={props.to} className={props.className}>
      <Nav.Link>{props.children}</Nav.Link>
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  to: propTypes.string,
  children: propTypes.any,
};

export default NavLink;
