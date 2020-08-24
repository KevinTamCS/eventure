import React from 'react';
import { LinkButton } from 'components/Button';
import { EndingContainer, Heading } from './styles';

const Ending = () => {
  return (
    <EndingContainer>
      <Heading>Start your journey for virtual events today.</Heading>
      <LinkButton to="/join" centered>
        Join Eventure
      </LinkButton>
    </EndingContainer>
  );
};

export default Ending;
