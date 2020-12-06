import styled from 'styled-components/macro';
import Navbar from 'react-bootstrap/Navbar';

export const StyledHeader = styled.header`
  margin-bottom: 3.5rem;
`;

export const StyledNavbar = styled(Navbar)`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.075);
  background-color: #fff;
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  justify-content: flex-end;
`;


