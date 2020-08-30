import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Logo from './components/Logo';
import Links from './components/Links';
import { StyledHeader, NavbarCollapse, StyledNavbar } from './style';

const Header = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <StyledHeader>
      <StyledNavbar
        className="justify-content-between"
        fixed="top"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Logo />
          {!(location.pathname === '/welcome') && (
            <NavbarCollapse>
              <Links />
            </NavbarCollapse>
          )}
        </Container>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
