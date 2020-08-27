import React from 'react';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory';
import Ending from './components/Ending';
import { StyledContainer } from './styles';

const Home = (): JSX.Element => {
  const isLoggedIn: boolean = JSON.parse(
    localStorage.getItem('isLoggedIn') as string
  );

  return (
    <>
      <StyledContainer fluid="md">
        {!isLoggedIn && <Landing />}
        <FeaturedEvents isLoggedIn={isLoggedIn} />
      </StyledContainer>

      {/* Slowly render as many event categories as the user has */}
      <EventCategory title="Photography" />
      <EventCategory title="Live Performances" />
      <EventCategory title="Health and Wellness" />

      {!isLoggedIn && <Ending />}
    </>
  );
};

export default Home;
