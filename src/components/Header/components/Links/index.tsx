import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../NavLink';
import {
  AuthButtons,
  LoginNavLink,
  NavLinkButton,
  NewEventNavLink,
} from './styles';
import { Button } from 'components/Button';

const Links = (): JSX.Element => {
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
        {/*<NavLink to="/events">Discover</NavLink>*/}
        <AuthButtons>
          <LoginNavLink to="/login">Log In</LoginNavLink>
          <NavLinkButton to="/join">Sign Up</NavLinkButton>
        </AuthButtons>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <NavLink to="/events">Discover</NavLink>
        <NavLink to="/saved">Saved</NavLink>
        <NavLink to="/registered">Registered</NavLink>
        <NewEventNavLink to="/events/new">+ New Event</NewEventNavLink>
        <Button onClick={logOutUser}>Log Out</Button>
      </Nav>
    );
  }
};

export default Links;
