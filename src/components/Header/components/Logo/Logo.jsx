import React from 'react';
import styled from 'styled-components/macro';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarLogo = styled.img`
  height: 2rem;
`;

const Logo = () => {
  return (
    <LinkContainer to="/">
      <Navbar.Brand>
        <NavbarLogo
          src={process.env.PUBLIC_URL + '/logo-banner.png'}
          alt="Eventure logo"
        />
      </Navbar.Brand>
    </LinkContainer>
  );
};

export default Logo;
