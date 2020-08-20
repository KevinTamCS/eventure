// @flow
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import searchIcon from 'assets/icons/search.svg';

const Header = () => {
  return (
    <header>
      <Container fluid="md">
        <Navbar
          className="justify-content-between"
          fixed="top"
          bg="light"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <img
              className="navbar-logo"
              src={process.env.PUBLIC_URL + '/logo-banner.png'}
              alt="Eventure logo"
            />
          </Navbar.Brand>
          <div className="navbar-search-dropdown-group">
            <img src={searchIcon} alt="Search events" className="navbar-search"/>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Discover</Nav.Link>
              </LinkContainer>
              <LinkContainer to="login">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="signup">
                <Button variant="primary">Sign Up</Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
