import React from 'react';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory';
import { EventCategories } from 'components/EventEditor/eventMetadata';
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
      <EventCategory category={EventCategories.Photography} />
      <EventCategory category={EventCategories.LivePerformances} />
      <EventCategory category={EventCategories.HealthAndWellness} />

      {!isLoggedIn && <Ending />}
    </>
  );
};

export default Home;
