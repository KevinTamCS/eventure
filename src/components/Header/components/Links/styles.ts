import styled from 'styled-components';
import NavLink from '../NavLink';
import { LinkButton } from 'components/Button';

export const NewEventNavLink = styled(NavLink)`
  &&& {
    color: #008aff;
    font-weight: bold;
    transition: 0.1s;
    transition-timing-function: ease-in-out;
  }

  &&&:hover {
    color: #006aff;
  }
`;

export const LoginNavLink = styled(NavLink)`
  margin-right: 2rem;
`;

export const NavLinkButton = styled(LinkButton)`
  padding: 0.5rem;
  width: 8rem;
`;

export const AuthButtons = styled.div`
  display: flex;
`;
