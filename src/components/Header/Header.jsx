// @flow
import React from 'react';
import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './components/Logo';
import Search from './components/Search';
import Links from './components/Links';

const StyledHeader = styled.header`
  margin-bottom: 3.5rem;
`;

const NavbarCollapse = styled(Navbar.Collapse)`
  justify-content: flex-end;
`;

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
