import styled from 'styled-components/macro';
import React from 'react';
import propTypes from 'prop-types';

const OrganizerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Image = styled.img`
  margin-right: 0.75rem;
  width: 2rem;
  border-radius: 100%;
`;

const Name = styled.p`
  display: block;
  margin: 0;
`;

const Organizer = (props) => {
  return (
    <OrganizerContainer>
      <Image src={props.organizerImage} alt="Event organizer" />
      <Name>By {props.organizer}</Name>
    </OrganizerContainer>
  );
};

Organizer.propTypes = {
  organizer: propTypes.string,
  organizerImage: propTypes.string,
};

export default Organizer;
