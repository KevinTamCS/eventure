import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarSearch } from './styles';
import searchIcon from 'assets/icons/search.svg';

const Search = () => {
  return (
    <div>
      <NavbarSearch src={searchIcon} alt="Search events" />
      <Navbar.Toggle />
    </div>
  );
};

export default Search;
