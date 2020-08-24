import styled from 'styled-components';
import NavLink from '../NavLink';

export const NewEventNavLink = styled(NavLink)`
  &&& {
    color: #008aff;
    transition: 0.1s;
    transition-timing-function: ease-in-out;
  }
  &&&:hover {
    color: #006aff;
  }
`;
