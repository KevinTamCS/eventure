import React from 'react';
import Button from 'components/Button';
import { EndingContainer, Heading } from './styles';
import { Link } from 'react-router-dom';

const Ending = () => {
  return (
    <EndingContainer>
      <Heading>Start your journey for virtual events today.</Heading>
      <Button as={Link} center to="/join">
        Join Eventure
      </Button>
    </EndingContainer>
  );
};

export default Ending;
