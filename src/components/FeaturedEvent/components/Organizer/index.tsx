import React from 'react';
import { OrganizerContainer, Image, Name } from './styles';

interface Props {
  image: string;
  name: string;
}

const Organizer: React.FC<Props> = ({ image, name }) => {
  return (
    <OrganizerContainer>
      <Image src={image} alt="Event organizer" />
      <Name>By {name}</Name>
    </OrganizerContainer>
  );
};

export default Organizer;
