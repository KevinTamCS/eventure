import React from 'react';
import Container from 'react-bootstrap/Container';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory';
import Ending from './components/Ending';

const Home = () => {
  const isLoggedIn: boolean = JSON.parse(
    localStorage.getItem('isLoggedIn') as string
  );

  return (
    <>
      <Container fluid="md">
        {!isLoggedIn && <Landing />}
        <FeaturedEvents isLoggedIn={isLoggedIn} />
      </Container>

      {/* Slowly render as many event categories as the user has */}
      <EventCategory title="Photography" />
      <EventCategory title="Live Performances" />
      <EventCategory title="Health and Wellness" />

      {!isLoggedIn && <Ending />}
    </>
  );
};

export default Home;
