// @flow
import React, { useState } from 'react';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory/EventCategory';
import Ending from './components/Ending';
import './Home.scss';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Home">
      {/* Display landing section for logged out users */}
      {!isLoggedIn && <Landing />}

      <FeaturedEvents isLoggedIn={isLoggedIn}/>

      {/* Slowly render as many event categories as the user has */}
      <EventCategory title="Photography" />
      <EventCategory title="Live Performances" />
      <EventCategory title="Health and Wellness" />
      <Ending />
    </div>
  );
};

export default Home;
