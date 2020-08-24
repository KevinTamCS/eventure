import React from 'react';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory';
import Ending from './components/Ending';
import { HomeContainer } from './styles';

const Home = () => {
  const isLoggedIn: boolean = JSON.parse(
    localStorage.getItem('isLoggedIn') as string
  );

  return (
    <HomeContainer>
      {/* Display landing section for logged out users */}
      {!isLoggedIn && <Landing />}

      {/* Load the featured events for the user */}
      <FeaturedEvents isLoggedIn={isLoggedIn} />

      {/* Slowly render as many event categories as the user has */}
      <EventCategory title="Photography" />
      <EventCategory title="Live Performances" />
      <EventCategory title="Health and Wellness" />

      <Ending />
    </HomeContainer>
  );
};

export default Home;
