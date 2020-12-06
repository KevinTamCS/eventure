import React from 'react';
import { OrganizerDiv, Image, Name } from './styles';

interface Props {
  image: string;
  name: string;
}

const Organizer: React.FC<Props> = (props) => {
  const { image, name } = props;

  return (
    <OrganizerDiv>
      <Image src={image} alt="Event organizer" />
      <Name>By {name}</Name>
    </OrganizerDiv>
  );
};

export default Organizer;
