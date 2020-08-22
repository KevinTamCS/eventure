import React from 'react';
import Button from 'components/Button';
import { EndingContainer, Heading } from './styles';

const Ending = () => {
  return (
    <EndingContainer>
      <Heading>Start your journey for virtual events today.</Heading>
      <Button center to="/join">
        Join Eventure
      </Button>
    </EndingContainer>
  );
};

export default Ending;
