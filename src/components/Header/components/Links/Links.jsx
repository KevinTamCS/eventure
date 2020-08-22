import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import NavLink from '../NavLink';

const NewEventNavLink = styled(NavLink)`
  &&& {
    color: #008aff;
    transition: 0.1s;
    transition-timing-function: ease-in-out;
  }
  &&&:hover {
    color: #006aff;
  }
`;

const Links = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn')
  );

  const logOutUser = () => {
    console.log('Logging out user');
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
    history.push('/');
  };

  if (!isLoggedIn) {
    return (
      <Nav>
        <NavLink to="/">Discover</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <LinkContainer to="/join">
          <Button variant="primary">Sign Up</Button>
        </LinkContainer>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <NavLink to="/">Discover</NavLink>
        <NavLink to="/saved">Saved</NavLink>
        <NavLink to="/registered">Registered</NavLink>
        <NewEventNavLink to="/events/create">+ New Event</NewEventNavLink>
        <Button variant="primary" onClick={logOutUser}>
          Log Out
        </Button>
      </Nav>
    );
  }
};

export default Links;
