import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './components/Logo';
import Search from './components/Search';
import Links from './components/Links';
import { StyledHeader, NavbarCollapse } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar
        className="justify-content-between"
        fixed="top"
        bg="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Logo />
          <Search />
          <NavbarCollapse>
            <Links />
          </NavbarCollapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
