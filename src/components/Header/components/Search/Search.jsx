import React from 'react';
import styled from 'styled-components/macro';
import Navbar from 'react-bootstrap/Navbar';
import searchIcon from 'assets/icons/search.svg';

const NavbarSearch = styled.img`
  margin-right: 1.5rem;
`;

const Search = () => {
  return (
    <div>
      <NavbarSearch src={searchIcon} alt="Search events" />
      <Navbar.Toggle />
    </div>
  );
};

export default Search;
