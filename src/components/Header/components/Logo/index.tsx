import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { NavbarLogo } from './styles';

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
