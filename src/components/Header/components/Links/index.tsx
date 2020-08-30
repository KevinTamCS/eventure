import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../NavLink';
import {
  AuthButtons,
  LoginNavLink,
  NavLinkButton,
  NavList,
  NewEventNavLink,
} from './styles';
import UserMenu from 'components/UserMenu';
import UserMenuDropdown from '../../../UserMenuDropdown';

const Links = (): JSX.Element => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Planning on moving this to a global Redux store
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem('isLoggedIn') as string)
  );

  const toggleDropdownMenu = (): void => {
    console.log('Toggling dropdown menu');

    if (isDropdownOpen) {
      // Close dropdown
      setDropdownOpen(false);
    } else {
      // Open dropdown
      setDropdownOpen(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <Nav>
        <AuthButtons>
          <LoginNavLink to="/login">Log In</LoginNavLink>
          <NavLinkButton to="/join">Sign Up</NavLinkButton>
        </AuthButtons>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <NavList>
          <NavLink to="/events">Discover</NavLink>
          <NavLink to="/saved">Saved</NavLink>
          <NavLink to="/registered">Registered</NavLink>
          <NewEventNavLink to="/events/new">+ New Event</NewEventNavLink>
          <UserMenu onClick={toggleDropdownMenu} />
        </NavList>
        {isDropdownOpen && (
          <UserMenuDropdown toggleDropdownMenu={toggleDropdownMenu} />
        )}
      </Nav>
    );
  }
};

export default Links;
