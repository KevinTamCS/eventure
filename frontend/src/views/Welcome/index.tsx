import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import Categories from './components/Categories';
import { Description, Heading, Introduction, WelcomeContainer } from './styles';

const Welcome = () => {
  const history = useHistory();

  const existingPreferredCategories: string[] = JSON.parse(
    localStorage.getItem('preferredCategories') as string
  );

  const [preferredCategories] = useState<Set<string>>(
    new Set(existingPreferredCategories)
  );

  const savePreferredCategories = (): void => {
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

      <Button onClick={savePreferredCategories} centered>
        Continue
      </Button>
    </WelcomeContainer>
  );
};

export default Welcome;
