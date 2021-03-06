import React, { useState } from 'react';
import NavLink from '../Header/components/NavLink';
import { useHistory } from 'react-router-dom';
import {
  ButtonLink,
  ButtonLinkListItem,
  DropdownItems,
  DropdownMenu,
  Name,
} from './styles';

interface Props {
  toggleDropdownMenu: () => void;
}

const UserMenuDropdown: React.FC<Props> = (props): JSX.Element => {
  const { toggleDropdownMenu } = props;

  const history = useHistory();

  // Planning on moving this to a global Redux store
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem('isLoggedIn') as string)
  );

  const userFullName: string = ((localStorage.getItem('firstName') as string) +
    ' ' +
    localStorage.getItem('lastName')) as string;

  const logOutUser = (): void => {
    console.log('Logging out user');
    toggleDropdownMenu();
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    setLoggedIn(false);
    history.push('/');
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <Name>{userFullName}</Name>
      <hr />
      <DropdownItems>
        {/*<NavLink to="/events/created" onClick={toggleDropdownMenu}>*/}
        {/*  My Events*/}
        {/*</NavLink>*/}
        {/*<NavLink to="/settings" onClick={toggleDropdownMenu}>*/}
        {/*  Settings*/}
        {/*</NavLink>*/}
        <ButtonLinkListItem>
          <ButtonLink onClick={logOutUser}>Log Out</ButtonLink>
        </ButtonLinkListItem>
      </DropdownItems>
    </DropdownMenu>
  );
};

export default UserMenuDropdown;
