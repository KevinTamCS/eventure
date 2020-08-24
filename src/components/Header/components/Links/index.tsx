import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import NavLink from '../NavLink';
import { NewEventNavLink } from './styles';

const Links = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem('isLoggedIn') as string)
  );

  const logOutUser = (): void => {
    console.log('Logging out user');
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
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
