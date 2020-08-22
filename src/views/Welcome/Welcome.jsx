import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';
import Categories from './components/Categories';
import { Description, Heading, Introduction, WelcomeContainer } from './styles';

const Welcome = () => {
  const history = useHistory();
  const existingPreferredCategories = JSON.parse(
    localStorage.getItem('preferredCategories')
  );
  const [preferredCategories] = useState(new Set(existingPreferredCategories));

  const savePreferredCategories = () => {
    localStorage.setItem(
      'preferredCategories',
      JSON.stringify(Array.from(preferredCategories))
    );
    history.push('/');
  };

  return (
    <WelcomeContainer>
      <Introduction>
        <Heading>
          Welcome to Eventure, {localStorage.getItem('firstName')}!
        </Heading>
        <Description>What categories of events do you like?</Description>
      </Introduction>

      <Categories preferredCategories={preferredCategories} />

      <Button onClick={savePreferredCategories} center>
        Continue
      </Button>
    </WelcomeContainer>
  );
};

export default Welcome;
