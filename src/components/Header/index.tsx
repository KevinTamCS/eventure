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
      <Container>
        <Navbar
          className="justify-content-between"
          fixed="top"
          bg="light"
          expand="md"
          collapseOnSelect
        >
          <Logo />
          <Search />
          <NavbarCollapse>
            <Links />
          </NavbarCollapse>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
