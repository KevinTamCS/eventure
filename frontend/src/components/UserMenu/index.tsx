import React from 'react';
import profileImage from 'assets/dev/organizer.jpg';
import { DropdownIconSvg, Image, UserMenuButton } from './styles';

interface Props {
  onClick: () => void;
}

const UserMenu: React.FC<Props> = (props): JSX.Element => {
  const { onClick } = props;

  const userFullName = ((localStorage.getItem('firstName') as string) +
    ' ' +
    localStorage.getItem('lastName')) as string;

  return (
    <UserMenuButton onClick={onClick}>
      <Image src={profileImage} alt={userFullName} />
      <DropdownIcon />
    </UserMenuButton>
  );
};

const DropdownIcon = () => {
  return (
    <DropdownIconSvg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L11 1" stroke="#C4C4C4" />
    </DropdownIconSvg>
  );
};

export default UserMenu;
